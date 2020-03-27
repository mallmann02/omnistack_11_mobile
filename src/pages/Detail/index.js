import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, Image, Linking} from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import logoImg from '../../assets/logo.png';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer  from 'expo-mail-composer';
import api from '../../services/api';

/**
 * No primeiro incident property foi feito um array de estilização para aplicar dois estilos ao <Text>
 *      um estilo está anexado aos outros, e o outro é próprio dele
 * 
 * para enviarmos email iremos baixar um outro pacote chamado mail-composer
 * 
 * adiciona o axios que vai sei o client http que vai fazer as chamadas api e trazer os resultados do node
 * 
 * o useRoute servepra pegar informações especificas da pagina
 */


export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();
    
    const incident = route.params.incident;
    const message = `Olá ${incident.name} estou entrando em contato pois de gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}`;
    
    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendWhatsapp(){
       Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`) 
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
               
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color= "#E02041"/>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>
                    {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}
                </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}