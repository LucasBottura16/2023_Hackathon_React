import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
    const [email, setEmail] = useState('')
    const [Nome, setNome] = useState('')
    const [sobrenome, setSobreNome] = useState('')
    const [data, setData] = useState('')

    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={{ backgroundColor: '#A06DF2', flex: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
            <View style={{ backgroundColor: 'white', padding: 30, marginHorizontal: 30, borderRadius: 5 }}>
                <Image
                    source={require('../../assets/Logo2.png')}
                    style={{ width: '100%', marginTop:10 }}
                />
                <Text style={{ marginTop: 20, marginBottom: 5 }}>E-mail:</Text>
                <TextInput
                    value={email}
                    onChangeText={(texto) => setEmail(texto)}
                    style={{ borderRadius: 5, padding: 10, borderWidth: 0.5 }}
                    placeholder='Digite seu email'
                    keyboardType="email-address"
                />
                <Text style={{ marginTop: 20, marginBottom: 5 }}>Primeiro nome:</Text>
                <TextInput
                    value={Nome}
                    onChangeText={(texto) => setNome(texto)}
                    style={{ borderRadius: 5, padding: 10, borderWidth: 0.5 }}
                    placeholder='ex: João'
                    keyboardType="email-address"
                />
                <Text style={{ marginTop: 20, marginBottom: 5 }}>Sobrenome:</Text>
                <TextInput
                    value={sobrenome}
                    onChangeText={(texto) => setSobreNome(texto)}
                    style={{ borderRadius: 5, padding: 10, borderWidth: 0.5 }}
                    placeholder='ex: Pedro'
                    keyboardType="email-address"
                />
                <Text style={{ marginTop: 20, marginBottom: 5 }}>Data de Nascimento:</Text>
                <TextInput
                    value={data}
                    onChangeText={(texto) => setData(texto)}
                    style={{ borderRadius: 5, padding: 10, borderWidth: 0.5 }}
                    placeholder='16/10/2001'
                    keyboardType='number-pad'
                />
                <TouchableOpacity style={{ backgroundColor: '#A06DF2', justifyContent: 'center', alignItems: 'center', marginTop: 25, padding: 5, borderRadius: 5, marginBottom:10 }} onPress={() => navigation.navigate('Home')}>
                    <Text style={{ fontSize: 17, fontWeight: '500', marginTop: 5, color: 'white' }}>Registrar-se</Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'white', padding: 20, marginHorizontal: 30, borderRadius: 5, marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent:'center' }}>
                <Text style={{ fontSize: 17 }}>Já possui conta? Faça </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{ fontWeight: '900', color: '#A06DF2', fontSize: 17 }}>Login</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}