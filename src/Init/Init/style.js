import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    OptionsAll:{
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingTop: 20,
        justifyContent: "center"
        
    },
    InputButtonJogar:{
        borderWidth: 1,
        bottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "#0c9fc4",
        borderRadius: 15,
        borderColor: "blue"
    },
    InputButtonOpcao:{
        borderWidth: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
        top: 15,
        backgroundColor: "#0c9fc4",
        borderRadius: 15,
        borderColor: "blue"
    },
    InputButtonCreditos:{
        borderWidth: 1,
        top: 35,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "#0c9fc4",
        borderRadius: 15,
        borderColor: "blue"
    },
    TitleText: {
        color: '#ffffff',
        fontSize: 25,
        fontStyle: 'italic',
        bottom: 50
    },
    TitleTextCreditos: {
        color: '#ffffff',
        fontSize: 25,
        fontStyle: 'italic',
        
    },
    TitleTextOpcao: {
        color: '#ffffff',
        fontSize: 25,
        fontStyle: 'italic',
        bottom: 25
    },
    TextInputJogar:{
        color: '#ffffff',
        fontSize: 25,
    
        
    },
    TextInputOpcao:{
        color: '#ffffff',
        fontSize: 25,
        
    },
    TextInputCredits:{
        color: '#ffffff',
        fontSize: 25,
       
    },
    container: {
        flex: 1,
      },
      nomeUsuario: {
        color: "#fff",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        paddingBottom: 3,
        marginTop: 15,
        borderColor: "#fff", 
        borderWidth: 1, 
        width: 120,
        textAlign: "center"
    },
    nomeUsuarioFocus:{
        color: "#fff",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        paddingBottom: 3,
        marginTop: 15,
        borderColor: "#0c9fc4", 
        borderWidth: 1, 
        width: 120,
        textAlign: "center"
    },
    imgRede:{
        width: 55,
        height: 55,
        marginTop: 8,
        margin: 8
    },
    imgRedeGithub:{
        width: 65,
        height: 65,
        marginTop: 8,
        margin: 8,
        right: 10
    },
    imgRedeContainer:{
        flexDirection: "row",
        
    },
    saveButton:{
        backgroundColor: "#fff",
        marginTop: 15,
        paddingBottom: 8,
        paddingTop: 8,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 15
        
    },
    opcaoEscolha:{
        color: "#fff",
        flexDirection: "row",
        borderColor: "blue",
        borderWidth: 2,
        margin: 20,
        borderRadius: 40,
        padding: 15,
        backgroundColor: "#0c9fc4",
        
        
    },
    textEscolha:{
        color: "#fff",
        margin: 20,
        fontSize: 20,
        fontStyle: "italic"
    },

    optionsContainer:{
        flexDirection: "row",
        display: "flex",
        justifyContent: "center"
    },
    exitButton:{
        marginTop:10,
        marginRight: 650,
        borderWidth:2,
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        backgroundColor: "red",
        top: 50
    },
    image: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: "center"   
    },
    imageTabuleiro: {
        width: 650,
        left: 40,
        zIndex: 1,
        resizeMode: "center"
    },
    imgDado: {
        width: 80,
        right: 20,
        zIndex: 0,
        
        
    },
    seta:{
        width: 90,
        
    },
    Naves1:{
        width: 40,
        right: 625,
        top: 150,
        
        
    },
    cardPergunta:{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      },
      
      card: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        width: "80%",
        paddingLeft: 50,
        paddingRight: 50,
        borderWidth: 1,
        borderColor: "#0c9fc4"
      },
      
      questionText: {
        fontSize: 18,
        marginBottom: 10,
      },
      
      optionButton: {
        backgroundColor: "#ccc",
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#0c9fc4"
      },
      
      optionText: {
        fontSize: 16,
      },
      resultMessageContainer: {
        position: "absolute",
        
        left: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999, // Coloca a mensagem na frente de todos os outros elementos
        
      },
      
      resultMessageText: {
        fontSize: 44,
        fontWeight: "bold",
        color: "white", // Cor da mensagem de resultado
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        padding: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#0c9fc4"
      },

      randomNumberContainer: {
        position: "absolute",
        left: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999, // Coloca o número sorteado na frente de todos os outros elementos
      },
      
      randomNumberText: {
        fontSize: 148, // Tamanho do número sorteado
        fontWeight: "bold",
        color: "white", // Cor do número sorteado
        padding: 10,
        borderRadius: 5,
      },
      
      
      

})



export default styles