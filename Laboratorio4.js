/**********    Laboratorio 04  ********************
 * 
 * 
 * Complementa el objeto images de la tarea anterior con dos nuevos 
 * métodos (sin reescribir todo el objeto):

    1.    edit- que toma tres argumentos ( title, artist, y date) y 
          si encuentra una imagen con el título dado en la lista, 
          cambia sus propiedades artisty date;
    2.    delete- que toma el argumento title y si encuentra una imagen 
          con este título en la lista, la elimina 
          (para eliminar un elemento de la lista, use el método splice)
*   

    Además, agregue un método show al Imageconstructor que mostrará 
    información sobre esta imagen. No reescriba el constructor.
    Utilice prototipos para este propósito. 
    Luego, modifyel showmétodo del objeto de imágenes de modo 
    que utilice el showmétodo de imagen única recién creado para 
    mostrar la información.

    Pruebe el script llamando a la secuencia:
 */

    function Image(title, artist, date) {
      this.title = title;
      this.artist = artist;
      this.date = date;
    }
    
    // Agregamos el método show al prototipo de Image
    Image.prototype.show = function() {
      console.log(`${this.title} (${this.artist}, ${this.date})`);
    };
    
    const images = {
      list: [],
    
      // ... (otros métodos de images)
      contains(title) {
            return this.list.some(image => image.title === title);
        },
        
            // Método para agregar una imagen, evitando duplicados
            add(title, artist, date) {
                if (!this.contains(title)) {
                this.list.push(new Image(title, artist, date));
            } else {
                console.log(`La imagen '${title}' ya existe.`);
            }
        },
        
            // Método para mostrar las imágenes con un formato customizable
            show(format = (image) => `${image.title} (${image.artist}, ${image.date})`) {
                this.list.forEach(image => console.log(format(image)));
            },
        
            // Método para eliminar todas las imágenes
            clear() {
                this.list = [];
            },

      edit(title, newArtist, newDate) {
        const index = this.list.findIndex(image => image.title === title);
        if (index !== -1) {
          this.list[index].artist = newArtist;
          this.list[index].date = newDate;
        } else {
          console.log(`Imagen '${title}' no encontrada.`);
        }
      },
    
      delete(title) {
        const index = this.list.findIndex(image => image.title === title);
        if (index !== -1) {
          this.list.splice(index, 1);
        } else {
          console.log(`Imagen '${title}' no encontrada.`);
        }
      },
    
      show() {
        this.list.forEach(image => image.show());
      }
    };

    images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
    images.add('The Last Supper', 'Leonardo da Vinci', 1495);
    images.add('The Starry Night', 'Vincent van Gogh', 1889);
    images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
    images.delete('The Last Supper');
    images.show();
    // -> Mona Lisa (Leonardo da Vinci, 1504)
    // -> The Starry Night (Vincent van Gogh, 1889)