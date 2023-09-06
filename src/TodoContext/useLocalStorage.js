import React from "react";

function useLocaStorage(itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue);

  const [loading, setLoading] = React.useState(true);

  const [error, setError] = React.useState(false);

    React.useEffect(() => {
      setTimeout(() => {
        try { 
          const localStorageItem = localStorage.getItem(itemName);
    
          let parsedItem;
      
            if (!localStorageItem) {
              localStorage.setItem(itemName, JSON.stringify(initialValue));
              parsedItem = initialValue;
            } else {
              parsedItem = JSON.parse(localStorageItem);
              setItem(parsedItem);
            }
      
            setLoading(false);
      
        } catch(error) {
          setLoading(false);
          setError(true);
        }
      }, 2000);
    }, [itemName, initialValue]);
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      
      setItem(newItem);
    };
  
    return {item, 
    saveItem,
    loading,
    error,
    };
  
}

export { useLocaStorage };


// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: 'Ejemplo de Tarea 1', completed: true },
//   { text: 'Ejemplo de Tarea 2', completed: false },
//   { text: 'Ejemplo de Tarea 3', completed: false },
//   { text: 'Ejemplo de Tarea 4', completed: false },
//   { text: 'Ejemplo de Tarea 5', completed: false },
//   { text: 'Ejemplo de Tarea 6', completed: false },
//   { text: 'Ejemplo de Tarea 7', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

  