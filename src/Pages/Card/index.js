import React, { useState } from 'react';
import { View, Text, ScrollView, Modal, TouchableOpacity, Image } from 'react-native';
import Menu from './components/Menu';
import { BlurView } from "@react-native-community/blur";

export default function CardMenu(props) {
    const [modal, setModal] = useState(false)
    const [principal, setPrincipal] = useState(true)
    const [notificacao, setNotificacao] = useState(false)

    function AbrePrincipal() {
        setPrincipal(true)
        setNotificacao(false)
    }

    function AbreNotificacao() {
        setPrincipal(false)
        setNotificacao(true)
    }

    return (
        <ScrollView contentContainerStyle={{ backgroundColor: '#F4F4F4', flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, backgroundColor: 'white' }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => setModal(true)}>
                    <Text style={{ fontSize: 50, fontWeight: '300' }}>=</Text>
                    <Text style={{ fontSize: 20, paddingLeft: 10 }}>Home</Text>
                </TouchableOpacity>

                <Text>{props.route.params.nome}</Text>
            </View>

            <View style={{ backgroundColor: 'white', margin: 20, borderRadius: 10 }}>
                <View style={{ backgroundColor: '#C1C1C1', height: 150, borderRadius: 10 }} />
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'white', height: 90, width: 90, borderRadius: 90, marginLeft: 20, marginTop: -60, alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={require('../../assets/person.png')}
                            style={{ backgroundColor: '#F4F4F4', height: 80, width: 80, borderRadius: 90 }}
                        />
                    </View>
                    <Text style={{ marginTop: -35, marginLeft: 15, fontSize: 20, fontWeight: 'bold', color: 'white' }}>{props.route.params.nome}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 10, marginBottom: 20 }}>
                    <TouchableOpacity onPress={AbreNotificacao}>
                        <Text style={{ marginRight: 10, fontWeight: '600' }}>Notificações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={AbrePrincipal}>
                        <Text style={{ marginRight: 10, fontWeight: '600' }}>Principal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ marginRight: 10, fontWeight: '600' }}>Admins</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ marginRight: 10, fontWeight: '600' }}>Social</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {principal &&
                <View style={{ backgroundColor: 'white', margin: 20, borderRadius: 10, padding: 15, marginTop: 10 }}>
                    <Text style={{ fontSize: 16 }}>"No fim tudo dá certo, e se não deu certo é porque ainda não chegou ao fim"</Text>
                </View>
            }

            {notificacao &&
                <View>
                    <View style={{ backgroundColor: 'white', margin: 20, borderRadius: 10, padding: 15, marginTop: 10 }}>
                        <Text style={{ fontSize: 16 }}>Nova mensagem em "Chat"</Text>
                    </View>

                    <View style={{ backgroundColor: 'white', margin: 20, borderRadius: 10, padding: 15, marginTop: 0 }}>
                        <Text style={{ fontSize: 16 }}>Tem uma nova enquete rolando!</Text>
                    </View>
                </View>
            }

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