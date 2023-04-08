import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Image } from 'react-native';
import Menu from './components/Menu';
import { BlurView } from "@react-native-community/blur";

export default function CardMembros(props) {
    const [modal, setModal] = useState(false)
    const [perfils] = useState(
        [{ nome: 'Lucas Ruiz', Posts: 2, UpVotes: 1 },
        { nome: 'Vitória Bottura', Posts: 3, UpVotes: 1 },
        { nome: 'Luan Costa', Posts: 2, UpVotes: 2 }
        ])

    return (
        <ScrollView style={{ backgroundColor: '#F4F4F4', flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, backgroundColor: 'white' }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => setModal(true)}>
                    <Text style={{ fontSize: 50, fontWeight: '300' }}>=</Text>
                    <Text style={{ fontSize: 20, paddingLeft: 10 }}>Membros</Text>
                </TouchableOpacity>

                <Text>{props.route.params.nome}</Text>
            </View>

            {perfils.map((item) =>
                <View style={{ marginBottom: 20, borderRadius: 10, backgroundColor: 'white', margin: 20, alignItems: 'center' }} key={item.nome}>
                    <View style={{ backgroundColor: '#C1C1C1', height: 100, width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                    <Image
                        source={require('../../assets/person.png')}
                        style={{ width: 60, height: 60, borderRadius: 60, marginTop: -30 }}
                    />
                    <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 10 }}>{item.nome}</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '60%', marginVertical: 20 }}>
                        <View style={{ alignItems: 'center', marginRight: 20 }}>
                            <Text style={{ fontSize: 20 }}>{item.Posts}</Text>
                            <Text style={{ fontSize: 16, marginTop: 5 }}>Posts</Text>
                        </View>
                        <View style={{ borderLeftWidth: 1, height: 40 }} />
                        <View style={{ alignItems: 'center', paddingLeft: 20 }}>
                            <Text style={{ fontSize: 20 }}>{item.UpVotes}</Text>
                            <Text style={{ fontSize: 16, marginTop: 5 }}>Posts</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={{ marginVertical: 30, backgroundColor: '#E2ECF5', width: '80%', alignItems: 'center', paddingVertical: 10, borderRadius: 10 }}>
                        <Text style={{ color: '#2995FE', fontWeight: '700' }}>Ver perfil completo</Text>
                    </TouchableOpacity>
                </View>
            )}

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