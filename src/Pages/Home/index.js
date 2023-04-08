import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';

export default function Home() {
    const [cards] = useState(
        [
            { nome: 'Hackathon', descricao: 'Sem descritivo 1', inscrito: false, Privada: true },
            { nome: 'Hackathon2', descricao: 'Sem descritivo 2', inscrito: true, Privada: false },
            { nome: 'Hackathon3', descricao: 'Sem descritivo 3', inscrito: false, Privada: false },
        ])

    const navigation = useNavigation();

    return (
        <ScrollView style={{ backgroundColor: '#F4F4F4', flex: 1, paddingHorizontal: 30 }} showsVerticalScrollIndicator={false}>
            <View style={{ backgroundColor: '#A06DF2', marginTop: 40, padding: 20, borderRadius: 10 }}>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: '500', textAlign: 'center' }}>Encontre sua comunidade no 4.community</Text>
                <Text style={{ color: 'white', textAlign: 'center' }}>Descubra comunidades de eventos, empresas, clubes e muito mais!</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>Comunidades em destaque:</Text>
                {cards.map((item) =>
                    <View style={{ marginBottom: 20, borderRadius: 10, backgroundColor: 'white' }} key={item.nome}>
                        <Image
                            source={require('../../assets/4events.png')}
                            style={{ width: '100%', borderRadius: 10 }}
                        />
                        <View style={{ padding: 10 }}>
                            <Text>{item.nome}</Text>
                            <Text>{item.descricao}</Text>
                            {item.Privada ?
                                <Text style={{ marginTop: 40 }}>Comunidade Privada</Text> :
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, marginTop: 40 }}>
                                    <Text>Comunidade pública</Text>
                                    {item.inscrito ?
                                        <TouchableOpacity style={{ backgroundColor: '#A06DF2', justifyContent: 'center', alignItems: 'center', padding: 5, borderRadius: 5 }} onPress={() => navigation.navigate('CardMenu', item)}>
                                            <Text style={{ color: 'white', fontWeight: '500' }}>Acessar</Text>
                                        </TouchableOpacity> :
                                        <TouchableOpacity style={{ backgroundColor: '#57D38C', justifyContent: 'center', alignItems: 'center', padding: 5, borderRadius: 5 }} onPress={() => navigation.navigate('CardMenu', item)}>
                                            <Text style={{ color: 'white', fontWeight: '500' }}>Inscrever-se</Text>
                                        </TouchableOpacity>
                                    }
                                </View>
                            }

                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    );
}