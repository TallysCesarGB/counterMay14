import ButtonsCounter from "@/components/ButtonsCounter";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ContadorSimples() {
  // Estado para armazenar o valor do contador
  const [contador, setContador] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  // Funções para manipular o contador usando declaração de função normal
  function aumentar() {
    setContador(contador + 1);
    setShowMessage(false);
  }

  function diminuir() {
    setContador(contador - 1);
    setShowMessage(false);
  }

  function resetar() {
    setContador(0);
    if (contador !== 0) {
      setShowMessage(true);
    }
  }

  return (
    <View style={styles.container}>
      {/* Título do App */}
      <Text style={styles.titulo}>Contador App</Text>

      {/* Valor do Contador */}
      <View style={styles.contador}>
        <Text style={styles.textCounter}>{contador}</Text>
      </View>

      {showMessage && <Text>O contador foi reiniciado</Text>}

      {/* Botões de Controle - Usando o componente Button padrão */}
      <View style={styles.botoes}>
        <ButtonsCounter
          title="-"
          onPress={diminuir}
          backgroundColor="#f75151"
        />
        <ButtonsCounter
          title="Reset"
          onPress={resetar}
          backgroundColor="gray"
        />
        <ButtonsCounter
          title="+"
          onPress={aumentar}
          backgroundColor="#5caa4e"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 140,
    paddingBottom: 140,
    backgroundColor: "#f3f3f3",
  },
  titulo: {
    fontSize: 40,
    marginBottom: 20,
    fontWeight: "bold",
  },
  contador: {
    height: 160,
    width: 160,
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 100,
    elevation: 10,
  },
  textCounter: {
    fontSize: 56,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  botoes: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
  textMessage: {
    fontSize: 24,
    fontStyle: "italic",
    color: "gray",
  },
});
