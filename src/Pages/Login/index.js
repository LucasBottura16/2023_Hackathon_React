import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';

export default function Login() {
    const [email, setEmail] = useState('')
    const [codigo, setCodigo] = useState('')
    const [show, setShow] = useState(false)

    const navigation = useNavigation();

    function logar() {
        if (show == true) {
            navigation.navigate('Home')
        }

        if (show == false) {
            setShow(true)
        }

    }

    return (
        <ScrollView style={{ backgroundColor: 'white', flex: 1 }} showsVerticalScrollIndicator={false}>
            <Image
                source={require('../../assets/Logo.png')}
                style={{ width: '100%' }}
            />
            <View style={{ marginTop: 20, paddingHorizontal: 40 }}>
                <Image
                    source={require('../../assets/Logo2.png')}
                />
                <Text style={{ fontSize: 20, fontWeight: '700', marginTop: 20 }}>Entre com seu email</Text>
                <Text style={{ marginTop: 5 }}>Para acessar suas comunidades</Text>
                <TextInput
                    value={email}
                    onChangeText={(texto) => setEmail(texto)}
                    style={{ backgroundColor: '#F4F4F4', borderRadius: 5, padding: 10, marginTop: 20 }}
                    placeholder='Digite seu email'
                    keyboardType="email-address"
                />
                {show &&
                    <TextInput
                        value={codigo}
                        onChangeText={(texto) => setCodigo(texto)}
                        style={{ backgroundColor: '#F4F4F4', borderRadius: 5, padding: 10, marginTop: 20 }}
                        placeholder='Digite o código enviado'
                        keyboardType="email-address"
                    />
                }
                <TouchableOpacity style={{ backgroundColor: '#57D38C', justifyContent: 'center', alignItems: 'center', marginTop: 25, padding: 5, borderRadius: 5 }} onPress={logar}>
                    <Text style={{ color: 'white' }}>Entrar</Text>
                </TouchableOpacity>
                <Text style={{ marginTop: 20 }}>Ou</Text>
                <TouchableOpacity style={{paddingBottom:30}} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={{ fontSize: 17, fontWeight: '500', marginTop: 5 }}>Crie uma conta grátis</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}