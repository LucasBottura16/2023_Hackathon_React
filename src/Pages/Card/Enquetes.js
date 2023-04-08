import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Image } from 'react-native';
import Menu from './components/Menu';
import { BlurView } from "@react-native-community/blur";

export default function CardEnquetes(props) {
    const [modal, setModal] = useState(false)
    const [events, setEvents] = useState(false)
    const [brb, setBrb] = useState(false)
    const [fliperJam, setFliperJam] = useState(false)

    function Events() {
        setEvents(true)
        setBrb(false)
        setFliperJam(false)
    }

    function BRB() {
        setEvents(false)
        setBrb(true)
        setFliperJam(false)
    }

    function Fliper() {
        setEvents(false)
        setBrb(false)
        setFliperJam(true)
    }

    return (
        <ScrollView style={{ backgroundColor: '#F4F4F4', flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, backgroundColor: 'white' }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => setModal(true)}>
                    <Text style={{ fontSize: 50, fontWeight: '300' }}>=</Text>
                    <Text style={{ fontSize: 20, paddingLeft: 10 }}>Enquetes / Votações</Text>
                </TouchableOpacity>

                <Text>{props.route.params.nome}</Text>
            </View>

            <View style={{ backgroundColor: 'white', margin: 20, padding: 20, borderRadius: 10 }}>
                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '500' }}>Qual Hackathon você pretende participar ?</Text>
                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity style={{ backgroundColor: events ? '#2995FE' : 'white', borderRadius: 10, borderWidth: 1, alignItems: 'center', justifyContent: 'center', height: 40 }} onPress={Events}>
                        <Text style={{ color: events ? 'white' : 'black' }}>4 Events</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: brb ? '#2995FE' : 'white', borderRadius: 10, borderWidth: 1, alignItems: 'center', justifyContent: 'center', height: 40, marginTop: 10 }} onPress={BRB}>
                        <Text style={{ color: brb ? 'white' : 'black' }}>Desafio BRB</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: fliperJam ? '#2995FE' : 'white', borderRadius: 10, borderWidth: 1, alignItems: 'center', justifyContent: 'center', height: 40, marginTop: 10 }} onPress={Fliper}>
                        <Text style={{ color: fliperJam ? 'white' : 'black' }}>Fliper Jam</Text>
                    </TouchableOpacity>
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