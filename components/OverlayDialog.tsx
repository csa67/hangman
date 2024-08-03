import {View, StyleSheet, Modal, Pressable} from 'react-native';
import {ThemedText} from '@/components/ThemedText'

interface OverLayDialogProps{
    result: string,
    visible: boolean,
    onClose: () => void
}
export function OverlayDialog({result, visible, onClose} : OverLayDialogProps){

    return(
       <Modal
          animationType = "slide"
          transparent={true}
          visible={visible}
        >
          <View style={styles.modalContainer}>
                        <View style={styles.modalView}>
                            <ThemedText> {result} </ThemedText>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={onClose}
                            >
                                <ThemedText>New Game</ThemedText>
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
            },
            modalView: {
                width: '80%',
                backgroundColor: '#e0ddd5',
                borderRadius: 20,
                padding: 35,
                justifyContent: 'center',
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
                borderRadius: 5,
                padding: 10,
                elevation: 2,
            },
            buttonClose: {
                backgroundColor: '#2196F3',
            },
            textStyle: {
                color: 'black',
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