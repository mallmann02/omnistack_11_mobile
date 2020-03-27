import React from 'react';
import { Feather } from '@expo/vector-icons'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import logoImg from '../../assets/logo.png';
import styles from './styles';

/**
 * para fazer o movimento de scroll usaremos o flatList para fazer a listagem
 * 
 * para o "key", necessário do mapeamento usaremos para o native o  KeyExtractor
 * 
 * o use navigation vai ter um comportamento semalhante ao useHistory
 */

export default function Incidents(){
    const navigation = useNavigation();
    function navigateToDetail(){
        navigation.navigate('Detail');
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.descrption}>Escolha um caso e salve o dia.</Text>
        
            <FlatList 
            data={[1, 2, 3]}
            style={styles.incidentList}
            keyExtractor={incident => String(incident)}
            showsVerticalScrollIndicator={false}
            renderItem={() => (
                <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>APAV</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 140,00</Text>

                <TouchableOpacity 
                style={styles.detailsButton}
                onPress={navigateToDetail}
                >
                   <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                   <Feather name="arrow-right" size={16} color="#E02041" /> 
                </TouchableOpacity>
            </View>
            )}
            />
        
        </View>
    );
}