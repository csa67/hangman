import {View, StyleSheet, Modal, Pressable} from 'react-native';
import {ThemedText} from '@/components/ThemedText'

export function OverlayDialog({visible, onClose}){

    return(
       <Modal
          animationType = "slide"
          transparent={true}
          visible={visible}
        >
          <View style={styles.modalContainer}>
                        <View style={styles.modalView}>
                            <ThemedText style={styles.modalText}>You Lose!</ThemedText>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={onClose}
                            >
                                <ThemedText style={styles.textStyle}>New Game</ThemedText>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            );
        };

        const styles = StyleSheet.create({
            modalContainer: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            modalView: {
                width: '80%',
                backgroundColor: 'red',
                borderRadius: 20,
                padding: 35,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
            },
            button: {
                borderRadius: 20,
                padding: 10,
                elevation: 2,
            },
            buttonClose: {
                backgroundColor: '#2196F3',
            },
            textStyle: {
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
            },
            modalText: {
                marginBottom: 15,
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
            },
        });