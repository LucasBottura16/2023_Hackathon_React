import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Image, TextInput } from 'react-native';
import WebView from 'react-native-webview';
import { BlurView } from '@react-native-community/blur';

export default function Menu({ data, close }) {
    const [modal, setModal] = useState(false)
    const [modalAjuda, setModalAjuda] = useState(false)
    const [google, setGoogle] = useState(true)
    const [chatGPT, setChaGPT] = useState(false)
    const [modalMotores, setModalMotores] = useState(false)
    const [sujestao, setSujestao] = useState('')

    const navigation = useNavigation();

    function IrHome() {
        navigation.navigate('CardMenu', data)
        close()
    }

    function IrMembros() {
        navigation.navigate('CardMembros', data)
        close()
    }

    function IrGame() {
        navigation.navigate('CardGamificacao', data)
        close()
    }

    function IrConvite() {
        setModal(true)
    }

    function IrSocial() {
        navigation.navigate('CardSocial', data)
        close()
    }

    function IrChat() {
        navigation.navigate('CardChat', data)
        close()
    }

    function IrEnquetes() {
        navigation.navigate('CardEnquetes', data)
        close()
    }

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

        <ScrollView style={{ backgroundColor: 'white', flex: 1, marginTop: '30%', borderRadius: 10, padding: 20 }} showsVerticalScrollIndicator={false}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} onPress={() => close()}>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>X</Text>
                <Text style={{ fontSize: 17, fontWeight: '600' }}>Menu {data.nome}</Text>
            </TouchableOpacity>

            <View style={{ marginTop: 20 }}>
                <TouchableOpacity style={{ paddingVertical: 10, flexDirection: 'row', alignItems: 'center' }} onPress={IrHome}>
                    <Image
                        source={require('../../../assets/Home.jpeg')}
                        style={{ marginRight: 10, width: 20, height: 20 }}
                    />
                    <Text style={{ fontSize: 18, }}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ paddingVertical: 10, flexDirection: 'row', alignItems: 'center' }} onPress={IrMembros}>
                    <Image
                        source={require('../../../assets/Person2.jpeg')}
                        style={{ marginRight: 10, width: 20, height: 20 }}
                    />
                    <Text style={{ fontSize: 18 }}>Membros</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ paddingVertical: 10, flexDirection: 'row', alignItems: 'center' }} onPress={IrGame}>
                    <Image
                        source={require('../../../assets/Trofeu.jpeg')}
                        style={{ marginRight: 10, width: 20, height: 20 }}
                    />
                    <Text style={{ fontSize: 18 }}>Gamificação</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ paddingVertical: 10, flexDirection: 'row', alignItems: 'center' }} onPress={IrConvite}>
                    <Image
                        source={require('../../../assets/share.jpeg')}
                        style={{ marginRight: 10, width: 20, height: 20 }}
                    />
                    <Text style={{ fontSize: 18 }}>Convide Membros</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ paddingVertical: 10, flexDirection: 'row', alignItems: 'center' }} onPress={() => setModalAjuda(true)}>
                    <Image
                        source={require('../../../assets/ajuda.png')}
                        style={{ marginRight: 10, width: 25, height: 25 }}
                    />
                    <Text style={{ fontSize: 18 }}>Ajuda / Sujestões</Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 40 }}>
                <Text style={{ fontSize: 22, fontWeight: '700' }}>Gestão de pessoas </Text>
                <TouchableOpacity style={{ paddingVertical: 10, marginTop: 10, paddingLeft: 15 }} onPress={IrSocial}>
                    <Text style={{ fontSize: 18 }}>Social</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ paddingVertical: 10, paddingLeft: 15, flexDirection: 'row' }} onPress={IrChat}>
                    <Text style={{ fontSize: 18 }}>Chat</Text>
                    <View style={{ backgroundColor: 'red', width: 17, height: 17, borderRadius: 17, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 13 }}>1</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ paddingVertical: 10, paddingLeft: 15 }} onPress={IrEnquetes}>
                    <Text style={{ fontSize: 18 }}>Enquetes / Votações</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ paddingVertical: 10, paddingLeft: 15 }} onPress={OpenPesquisa}>
                    <Text style={{ fontSize: 18 }}>Motores de Busca</Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginVertical: 40 }}>
                <Text style={{ fontSize: 22, fontWeight: '700' }}>Chats Privados</Text>
                <TouchableOpacity style={{ paddingVertical: 10, marginTop: 10, paddingLeft: 15 }} onPress={() => { }}>
                    <Text style={{ fontSize: 18 }}>Luan Coista</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ paddingVertical: 10, paddingLeft: 15 }} onPress={() => { }}>
                    <Text style={{ fontSize: 18 }}>Vitório Bottura</Text>
                </TouchableOpacity>
            </View>

            <Modal animationType='slide' visible={modalAjuda} transparent={true}>
                <BlurView
                    style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
                    blurType='dark'
                    blurAmount={3}
                    reducedTransparencyFallbackColor="black"
                />
                <View style={{ borderRadius: 10, backgroundColor: '#F4F4F4', marginVertical: '20%', marginHorizontal: 30, flex: 1, padding: 30, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: '500' }}>Ajuda / Sujestões</Text>
                        <TouchableOpacity onPress={() => setModalAjuda(false)}>
                            <Text style={{ fontSize: 20, fontWeight: '600' }}>X</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ alignItems: 'center', paddingHorizontal: 20 }}>

                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                        <Text style={{ fontSize: 17 }}>Sujestões:</Text>
                        <TextInput
                            value={sujestao}
                            onChangeText={(texto) => setSujestao(texto)}
                            style={{ backgroundColor: '#F4F4F4', borderRadius: 5, borderWidth: 1, padding: 10, marginTop: 5 }}
                            placeholder='Sua sujetão é muito bem-vinda!'
                            keyboardType="email-address"
                        />

                        <TouchableOpacity style={{ backgroundColor: '#2995FE', padding: 10, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginTop: 10 }} onPress={OpenPesquisa}>
                            <Text style={{ color: 'white' }}>Enviar</Text>
                        </TouchableOpacity>

                        <Text style={{ fontSize: 13, marginTop: 20 }}>Entre em contato:</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../../assets/linkedin.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../../assets/twitter.png')}
                                    style={{ width: 55, height: 55 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../../assets/facebook.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../../assets/globo.png')}
                                    style={{ width: 35, height: 35, tintColor: '#2995FE' }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </Modal>

            <Modal animationType='slide' visible={modal} transparent={true}>
                <BlurView
                    style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
                    blurType='dark'
                    blurAmount={3}
                    reducedTransparencyFallbackColor="black"
                />
                <View style={{ borderRadius: 10, backgroundColor: '#F4F4F4', marginVertical: '40%', marginHorizontal: 30, flex: 1, padding: 30, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: '500' }}>Convidar Membros</Text>
                        <TouchableOpacity onPress={() => setModal(false)}>
                            <Text style={{ fontSize: 20, fontWeight: '600' }}>X</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ alignItems: 'center', paddingHorizontal: 20 }}>
                        <View style={{ backgroundColor: '#C1C1C1', height: 100, width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                        <Image
                            source={require('../../../assets/person.png')}
                            style={{ width: 60, height: 60, borderRadius: 60, marginTop: -30 }}
                        />


                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
                        <Text style={{ fontSize: 13 }}>Link para compartilhamento:</Text>

                        <Text style={{ backgroundColor: 'white', borderWidth: 1, borderRadius: 5, marginTop: 10, padding: 5, paddingHorizontal: 10 }}>https://4.community/register/lhg7g34s</Text>

                        <Text style={{ fontSize: 13, marginTop: 20 }}>Compartilhe nas redes sociais:</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../../assets/linkedin.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../../assets/twitter.png')}
                                    style={{ width: 55, height: 55 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../../assets/facebook.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../../assets/globo.png')}
                                    style={{ width: 35, height: 35, tintColor: '#2995FE' }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </Modal>

            <Modal animationType='slide' visible={modalMotores}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 60, paddingHorizontal: 30 }} onPress={() => setModalMotores(false)}>
                        <Text style={{ fontSize: 20, fontWeight: '600' }}>X Pesquisa</Text>
                        <Text style={{ fontSize: 17, fontWeight: '600' }}>Menu {data.nome}</Text>
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
        </ScrollView>
    );
}