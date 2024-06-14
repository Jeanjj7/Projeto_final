import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { supabase } from './conexao';

export default function App() {
  const [produtoDigitada,setProduto] = useState("");
  const [valorDigitada,setValor] = useState("");
  const [quantidadeDigitada,setQuantidade] = useState("");
  const [dados,setDados] = useState([]);
  

  const consultaCompras = async()=>{
    const {data,error} = await supabase.from("tb_lista_compras")
    .select("*")
    if(error){
      alert("Falha ao consulta!!")

    }else{
      setDados(data)

    }
  }
  useEffect(()=>{
    consultaCompras();
  },[]);

  const cadastraCompras = async() =>{
    const{error} = await supabase.from("tb_lista_compras")
    .insert({coluna_produto:produtoDigitada,coluna_valor:valorDigitada,coluna_quantidade:quantidadeDigitada})
    if(error){
      alert("Falha no cadastro!!")

    }else{
      alert("Cadrastado com sucesso!!")
      consultaCompras();

    }
  }
  return (
    <View style={estilos.container}>
      <Text style={{fontSize:20}}>Compras cadastradas</Text>

      <TextInput
      onChangeText={(texto)=>setProduto(texto)}
        placeholder='Digita o produto'
        style={estilos.cxTexto}

      />
      <TextInput
      onChangeText={(texto)=>setValor(texto)}
        placeholder='Digita o valor'
        style={estilos.cxTexto}

      />
      <TextInput
      onChangeText={(texto)=>setQuantidade(texto)}
        placeholder='Digita o quantidade'
        style={estilos.cxTexto}

      />
      <Button
        title='Cadastror'
        onPress={()=>{cadastraCompras()}}
      />
      <ScrollView>
      {dados.map((item)=>(
        <View style={estilos.cxProduto}>
        <Text>N°: {item.id}</Text>
        <Text>PRODUTO: {item.coluna_produto}</Text>
        <Text>VALOR:R$ {item.coluna_valor}</Text>
        <Text>QUANTIDADE: {item.coluna_quantidade}</Text>
        </View>  
        ))}

      </ScrollView>
        
      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cxTexto:{
    borderWidth: 1,
    borderColor:"#a9a9a9",
    padding:4,
    marginBottom:10,
    borderRadius:4,

  },
  cxProduto:{
    borderWidth: 1,
    borderRadius: 8,
    minWidth: 300,
    padding: 10,
    marginTop: 10,
  },
});

