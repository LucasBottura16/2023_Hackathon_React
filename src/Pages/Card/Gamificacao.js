import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Image } from 'react-native';
import Menu from './components/Menu';
import { BlurView } from "@react-native-community/blur";

export default function CardGamificacao(props) {
    const [modal, setModal] = useState(false)
    const [objetivos] = useState([
        { objetivo: 'Se postar no Mural Social', pontos: 50 },
        { objetivo: 'Se der um feedback', pontos: 30 },
        { objetivo: 'Se adicionar a sua foto', pontos: 20 },
        { objetivo: 'Se completar todas as informações do seu cadastro', pontos: 40 },
    ])

    return (
        <ScrollView style={{ backgroundColor: '#F4F4F4', flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, backgroundColor: 'white' }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => setModal(true)}>
                    <Text style={{ fontSize: 50, fontWeight: '300' }}>=</Text>
                    <Text style={{ fontSize: 20, paddingLeft: 10 }}>Gamificação</Text>
                </TouchableOpacity>

                <Text>{props.route.params.nome}</Text>
            </View>

            <View style={{ margin: 20 }}>
                <View style={{ backgroundColor: 'white', alignItems: 'center', borderRadius: 10 }}>
                    <View style={{ borderWidth: 3, alignItems: 'center', justifyContent: 'center', borderRadius: 70, width: 70, height: 70, padding: 20, marginTop: 20 }}>
                        <Text>0</Text>
                        <Text>/0</Text>
                    </View>

                    <Text style={{ marginTop: 35 }}>Você está no Começo</Text>

                    <TouchableOpacity style={{ padding: 5, paddingHorizontal: 15, backgroundColor: '#632788', marginTop: 35, marginBottom: 20, borderRadius: 5 }}>
                        <Text style={{ color: 'white' }}>Ver Ranking</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: 'white', alignItems: 'center', borderRadius: 10, marginTop: 15, padding: 20 }}>
                    <Text style={{ color: '#632788', fontSize: 23, fontWeight: 'bold' }}>TOP 10 RANKING</Text>
                    <Text style={{ textAlign: 'center', marginTop: 35, paddingHorizontal: 20 }}>Não há competidores ainda, seja o primeiro(a) a conquistar pontos!</Text>
                </View>

                <View style={{ backgroundColor: 'white', borderRadius: 10, marginTop: 15, padding: 20 }}>
                    <Text style={{ color: '#632788', fontSize: 20, fontWeight: '700' }}>OBJETIVOS</Text>

                    {objetivos.map((item) =>
                        <View style={{ alignItems: 'center' }} key={item.objetivo}>
                            <View style={{ borderWidth: 1, alignItems: 'center', marginTop: 50, borderRadius: 10, width: '70%' }}>
                                <View style={{ backgroundColor: '#575259', alignItems: 'center', width: 60, height: 60, marginTop: -30, padding: 10, borderRadius: 10 }}>
                                    <Image
                                        source={require('../../assets/Top.png')}
                                        style={{ width: 40, height: 40 }}
                                    />
                                </View>
                                <Text style={{ marginVertical: 10, textAlign: 'center', paddingHorizontal: 50 }}>{item.objetivo}</Text>
                                <Text style={{ marginBottom: 10, textAlign: 'center' }}>{item.pontos} pontos</Text>

                            </View>
                        </View>
                    )}
                </View>

                <View style={{ backgroundColor: 'white', borderRadius: 10, marginTop: 15, padding: 20 }}>
                    <Text style={{ color: '#632788', fontSize: 20, fontWeight: '700' }}>RECOMPENSAS</Text>

                    <View style={{ backgroundColor: '#22C261', borderRadius: 10, marginTop: 20 }}>
                        <Text style={{ paddingLeft: 10, marginTop: 10, marginBottom: 5, color: 'white', fontSize: 16 }}>Nível 1</Text>

                        <Text style={{ backgroundColor: 'white', margin: 5, padding: 10, borderRadius: 5 }}>Você está no jogo! Continue contribuindo para subir de nível.</Text>
                    </View>

                    <View style={{ backgroundColor: '#8613ED', borderRadius: 10, marginTop: 20 }}>
                        <Text style={{ paddingLeft: 10, marginTop: 10, marginBottom: 5, color: 'white', fontSize: 16 }}>Nível 2</Text>

                        <Text style={{ backgroundColor: 'white', margin: 5, padding: 10, borderRadius: 5 }}>A coisa está ficando séria! Nível 2 representa o seu esforço e motivação em continuar contribuindo, vamos com tudo!</Text>
                    </View>
                </View>
            </View>



            <Modal animationType='slide' visible={modal} transparent={true}>
                <BlurView
                    style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
                    blurType='dark'
                    blurAmount={3}
                    reducedTransparencyFallbackColor="black"
                />
                <Menu data={props.route.params} close={() => setModal(false)} />
            </Modal>
        </ScrollView >
    );
}