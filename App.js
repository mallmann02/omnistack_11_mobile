import React from 'react';

import Routes from './src/routes';

/**
 * fast refresh
 * Elementos HTML (na web: <div> <header>): aqui não se tem todas tags
 *    VIEW : é como um containet
 *    TEXT: todo tipo de texto
 *    NAO TEM SEMANTICA tipo um como na web que um TEXT é H1
 * Para estilizar: não se passa um id
 *    style={}     - passa o atributo style com um objeto
 *    Todos os componentes estão display: flex por padrão
 * Propriedade no react-native
 *    background-color ------> backgroundColor
 *    qualquer coisa que não é numero tipo:
 *          align-itens: center; ----------> alingItems: 'center',
 *    NÃO EXISTE ERANÇA DE ESTILOS
 *        TODO ELEMENTO PRECISA DE UMA ESTILIZAÇÃO PRÓRPIA
 */

export default function App() {
  return (
      <Routes />
  );
}
