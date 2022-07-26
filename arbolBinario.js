




    

class Nodo {
    // key = cantidad
    // dato = mes
    constructor (key,dat) {
      this.key = key
      this.right = null
      this.left = null
      this.dat=dat
    }
  }
  
  class Tree {
    constructor () {
      this.raiz = null
    }
  
    isEmpty () {
      return this.raiz === null
    }
  
    agregar (key,dat) {
      // arbol no tiene elementos
      if (this.isEmpty()) {
        this.raiz = new Nodo(key,dat)
        return
      }
  
      var aux = this.raiz
  
      while (aux) {
        // vamos hacia la izquierda
        if (key < aux.key) {
          if (aux.left) {
            aux = aux.left
          } else {
            aux.left = new Nodo(key,dat)
            return
          }
        } else { // vamos hacia la derecha
          if (aux.right) {
            aux = aux.right
          } else {
            aux.right = new Nodo(key,dat)
            return
          }
        }
      }
    }   
  
    buscarMin(Nodo = this.raiz) {
      if (!this.isEmpty()) {
        
          // siempre a la izquierda de cualquier Nodo
          // estará el menor valor.
          // iteramos hasta el último menor.
          
        while (Nodo.left) {
          Nodo = Nodo.left
        }
        return Nodo
      }
    }
  
    borrar (key, Nodo = this.raiz) {
      if (!Nodo) {
        return null
      }
      if (Nodo.key === key) {
        // no tiene hijos
        if (!Nodo.left && !Nodo.right) {
          return null
        }
        // no tiene hijo izquierdo
        if (!Nodo.left) {
          return Nodo.right
        }
        // no tiene hijo derecho
        if (!Nodo.right) {
          return Nodo.left
        }
  
        //
        var temp = this.buscarMin(Nodo.right)
        // con ese valor reemplazamos el valor del Nodo que queremos eliminar.
        Nodo.key = temp.key;
        
        Nodo.right = this.borrar(temp.key, Nodo.right)
        return Nodo;
      }
      // buscamos a la derecha
      if (Nodo.key < key) {
        Nodo.right = this.borrar(key, Nodo.right)
        return Nodo
      }
      // buscamos a la izquierda
      if (Nodo.key > key) {
        Nodo.left = this.borrar(key, Nodo.left)
        return Nodo
      }
    }
   
    inOrder (Nodo = this.raiz) {
      if (!Nodo) {
        return
      }
      this.inOrder(Nodo.left)
      console.log('KEY: '+Nodo.key+'\n',Nodo.dat)
      datos.push(Nodo)
      cantidad.push(Nodo.key)
      mes.push(Nodo.dat)
      this.inOrder(Nodo.right)
      
    }
    
    preOrder (Nodo = this.raiz) {
      if (!Nodo) {
        return
      }
      console.log('KEY: '+Nodo.key+'\n',Nodo.dat)
      this.preOrder(Nodo.left)
      this.preOrder(Nodo.right)
    }
    
    postOrder (Nodo = this.raiz) {
      if (!Nodo) {
        return
      }
      this.postOrder(Nodo.left)
      this.postOrder(Nodo.right)
      console.log('KEY: '+Nodo.key+'\n',Nodo.dat)
    }
    buscar (value) {
      if (this.isEmpty()) {
        return null
      }
  
      var aux = this.raiz
      if (aux.key === value) {
        return aux
      }
  
      while(aux) {
        // si encontramos el nodo con el valor
        // paramos de iterar.
        if (aux.key === value) {
          break
        }
        // seguimos buscando a la derecha
        if (aux.key< value) {
          aux = aux.right
        } else if (aux.key > value) {
          // seguimos buscando a la izquierda
          aux = aux.left
        }
      }
      // retornamos el nodo encontrado.
      // si no encontramos el nodo con el valor
      // aux, toma el valor null.
      return aux
    }
  }

  var arbolBinario = new Tree();
  let datos=[];
  let mes=[];
  let cantidad=[];

  //! utilizacion de arbol
  function consultarVenta() {
      $query = `SELECT CantidadVendida, mes FROM VentaMensual`;
      conexion2.query($query, function (err,rows) {
        if (err) { //INSTRUCCION EN CASO DE ERROR
          console.log("error en el query");
          console.log(err);
          return;
        }else{
          let tablaVenta = document.getElementById("VentaAnual");
          for (let i = 0; i < rows.length; i++) {
            arbolBinario.agregar(rows[i].cantidadVendida, rows[i].mes);
          }
          arbolBinario.inOrder();
          //arbolBinario.postOrder();
          for (let i = 0; i < datos.length; i++) {
            var newRowVenta = tablaVenta.insertRow(-1);
            var celdaCantidad = newRowVenta.insertCell(0);
            var celdaMes = newRowVenta.insertCell(1);
            var textoCantidad = document.createTextNode(cantidad[i]);
            var textoMes = document.createTextNode(mes[i]);

            celdaCantidad.appendChild(textoCantidad);
            celdaMes.appendChild(textoMes);
          }
        }
      });
  }
  consultarVenta();