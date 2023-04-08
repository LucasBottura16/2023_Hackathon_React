import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Image, TextInput } from 'react-native';
import Menu from './components/Menu';
import { BlurView } from "@react-native-community/blur";
import WebView from 'react-native-webview';

export default function CardSocial(props) {
    const [modal, setModal] = useState(false)
    const [show, setShow] = useState(false)
    const [modalMotores, setModalMotores] = useState(false)
    const [posts, setPosts] = useState([{

        id: 0,
        Titulo: '4.Community',
        Texto: 'A melhor plataforma de comunidades'
    }])
    const [google, setGoogle] = useState(true)
    const [chatGPT, setChaGPT] = useState(false)
    const [titulo, setTitulo] = useState('')
    const [texto, setTexto] = useState('')

    function NovaPubli() {
        if (show == true) {
            setShow(false)
        }
        if (show == false) {
            setShow(true)
        }
    }

    // function adicionarMensagem = armazena as mensagem em um array de objetos em ordem eviadas 
    async function adicionarMensagem() {
        if (titulo === '' || texto == '') {
            alert('Digite uma mensagem')
            return;
        }

        let id = posts.length === 0 ? 0 : (posts.length + 1) - 1;

        const Mensagem = {
            id: id,
            Titulo: titulo,
            Texto: texto
        }

        let newMensagem = [...posts, Mensagem];

        newMensagem.sort((a, b) => {
            if (a.id > b.id) return -1
            else return true
        });

        setPosts(newMensagem)
        setTitulo('')
        setTexto('')
        setShow(false)
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
        <ScrollView style={{ backgroundColor: '#F4F4F4', flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, backgroundColor: 'white' }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => setModal(true)}>
                    <Text style={{ fontSize: 50, fontWeight: '300' }}>=</Text>
                    <Text style={{ fontSize: 20, paddingLeft: 10 }}>Social</Text>
                </TouchableOpacity>

                <Text>{props.route.params.nome}</Text>
            </View>

            <TouchableOpacity style={{ marginHorizontal: 30, marginTop: 20, backgroundColor: '#2995FE', alignItems: 'center', paddingVertical: 10, borderRadius: 10 }} onPress={NovaPubli}>
                <Text style={{ color: 'white', fontWeight: '700' }}>+ Nova Publicação</Text>
            </TouchableOpacity>

            {show &&

                <View style={{ backgroundColor: 'white', margin: 10, borderRadius: 5, padding: 10 }}>
                    <View style={{ justifyContent: 'flex-end', marginVertical: 10, flexDirection: 'row' }}>
                        <TouchableOpacity style={{ backgroundColor: '#2995FE', padding: 10, borderRadius: 5, width: 100, justifyContent: 'center', alignItems: 'center' }} onPress={OpenPesquisa}>
                            <Text style={{ color: 'white' }}>Pesquisar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#2995FE', padding: 10, borderRadius: 5, width: 100, justifyContent: 'center', alignItems: 'center', marginLeft: 12 }} onPress={adicionarMensagem}>
                            <Text style={{ color: 'white' }}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ marginTop: 10, marginBottom: 5 }}>Título da publicação:</Text>
                    <TextInput
                        value={titulo}
                        onChangeText={(texto) => setTitulo(texto)}
                        style={{ padding: 10, borderWidth: 1, borderRadius: 5 }}
                        placeholder='Use o polvo para melhorar seu titulo'
                        keyboardType="email-address"
                    />
                    <Text style={{ marginTop: 10, marginBottom: 5 }}>Texto da publicação:</Text>
                    <TextInput
                        value={texto}
                        onChangeText={(texto) => setTexto(texto)}
                        style={{ padding: 20, borderWidth: 1, marginTop: 5, borderRadius: 5 }}
                        placeholder='Use o polvo para melhorar seu texto'
                        keyboardType="email-address"
                    />
                </View>
            }


            {posts.map((item) =>
                <View style={{ backgroundColor: 'white', margin: 15, padding: 20, flexDirection: 'row' }} key={item.id}>
                    <View style={{ marginRight: 25 }}>
                        <Text style={{ fontSize: 20 }}>^</Text>
                        <Text style={{ marginTop: -10 }}>0</Text>
                    </View>

                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ backgroundColor: '#632788', color: 'white', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 15 }}>Geral</Text>
                            <Image
                                source={require('../../assets/person.png')}
                                style={{ width: 20, height: 25, borderRadius: 25, marginHorizontal: 10 }}
                            />
                            <Text>{props.route.params.nome}</Text>
                        </View>

                        <Text style={{ marginTop: 10, fontSize: 14 }}>{item.Titulo}</Text>

                        <Text style={{ marginTop: 20, fontSize: 13 }}>{item.Texto}</Text>
                    </View>

                </View>
            )}

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