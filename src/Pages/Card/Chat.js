import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Image, TextInput } from 'react-native';
import Menu from './components/Menu';
import WebView from 'react-native-webview';
import { BlurView } from '@react-native-community/blur';

export default function CardChat(props) {
    const [modal, setModal] = useState(false)
    const [modalMotores, setModalMotores] = useState(false)
    const [mensagem, setMensagem] = useState('')
    const [mensagens, setMensagens] = useState([{
        id: 0,
        Mensagem: 'Olá Hackathon',
    }])
    const [google, setGoogle] = useState(true)
    const [chatGPT, setChaGPT] = useState(false)

    // function adicionarMensagem = armazena as mensagem em um array de objetos em ordem eviadas 
    async function adicionarMensagem() {
        if (mensagem === '') {
            alert('Digite uma mensagem')
            return;
        }

        let id = mensagens.length === 0 ? 0 : (mensagens.length + 1) - 1;

        const Mensagem = {
            id: id,
            Mensagem: mensagem,
        }

        let newMensagem = [...mensagens, Mensagem];

        newMensagem.sort((a, b) => {
            if (b.id > a.id) return -1
            else return true
        });

        setMensagens(newMensagem)
        setMensagem('')
    };

    function OpenPesquisa() {
        setModalMotores(true)
    }

    function AbreGogogle() {
        setGoogle(true)
        setChaGPT(false)
    }

    function AbreChaGPT() {
        setGoogle(false)
        setChaGPT(true)
    }

    return (
        <ScrollView contentContainerStyle={{ backgroundColor: '#F4F4F4', flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, backgroundColor: 'white' }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => setModal(true)}>
                    <Text style={{ fontSize: 50, fontWeight: '300' }}>=</Text>
                    <Text style={{ fontSize: 20, paddingLeft: 10 }}>Chat</Text>
                </TouchableOpacity>

                <Text>{props.route.params.nome}</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {mensagens.map((item) =>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 10 }} key={item.id}>
                        <Image
                            source={require('../../assets/person.png')}
                            style={{ width: 40, height: 40, borderRadius: 40 }}
                        />
                        <Text style={{ backgroundColor: 'white', padding: 15, marginLeft: 5, borderRadius: 5 }}>{item.Mensagem}</Text>
                    </View>)}

            </ScrollView>

            <View style={{ justifyContent: 'flex-end', paddingTop: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white' }}>
                    <TextInput
                        value={mensagem}
                        onChangeText={(texto) => setMensagem(texto)}
                        style={{ padding: 20, backgroundColor: 'white', width: '75%' }}
                        placeholder='Digite para @Chat'
                        keyboardType="email-address"
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '25%' }}>
                        <TouchableOpacity style={{ backgroundColor: '#2995FE', padding: 10, borderRadius: 5, marginRight: 10, width: 40, height: 40, }} onPress={adicionarMensagem}>
                            <Image
                                source={require('../../assets/send.png')}
                                style={{ width: 20, height: 20, borderRadius: 40, tintColor: 'white' }}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ backgroundColor: '#2995FE', padding: 10, borderRadius: 5 }} onPress={OpenPesquisa}>
                            <Image
                                source={require('../../assets/Lupa.png')}
                                style={{ width: 20, height: 20, borderRadius: 40, tintColor: 'white' }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>


            <Modal animationType='slide' visible={modalMotores}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 60, paddingHorizontal: 30 }} onPress={() => setModalMotores(false)}>
                        <Text style={{ fontSize: 20, fontWeight: '600' }}>X Pesquisa</Text>
                        <Text style={{ fontSize: 17, fontWeight: '600' }}>Menu {props.route.params.nome}</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
                        <TouchableOpacity style={{ backgroundColor: '#2995FE', padding: 10, borderRadius: 5, marginRight: 10, width: '44%', alignItems: 'center' }} onPress={AbreGogogle}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ backgroundColor: '#2995FE', padding: 10, borderRadius: 5, width: '44%', alignItems: 'center' }} onPress={AbreChaGPT}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Chat GPT</Text>
                        </TouchableOpacity>
                    </View>

                    {google &&
                        <WebView source={{ uri: 'https://google.com' }} style={{ flex: 1, width: '100%', height: '100%' }} />
                    }

                    {chatGPT &&
                        <WebView source={{ uri: 'https://chat.openai.com/' }} style={{ flex: 1, width: '100%', height: '100%' }} />
                    }
                </View>
            </Modal>

            <Modal animationType='slide' visible={modal} transparent={true}>
                <BlurView
                    style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
                    blurType='dark'
                    blurAmount={3}
                    reducedTransparencyFallbackColor="black"
                />
                <Menu data={props.route.params} close={() => setModal(false)} />
            </Modal>
        </ScrollView>
    );
}