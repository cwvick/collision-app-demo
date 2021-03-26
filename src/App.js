import { useState, useEffect, useRef } from 'react';
import { Header, Segment, Input } from 'semantic-ui-react';
import InputBox from './components/InputBox';

function App() {
  const [int, setInt] = useState(3);
  const [items, setItems] = useState([]);
  const [maxItemId, setMaxItemId] = useState(1);
  const [collisionList, setCollisionList] = useState([]);

  const checkCollision = (newItems, int) => {
    const newCollisionList = newItems.map(() => []);
    int = parseInt(int);

    if (!newItems.length || newItems.length <= 1) {
      setCollisionList(newCollisionList);
      return;
    }

    newItems.forEach((item, index) => {
      const inputVal = item.inputVal;
      const collisionIdx = [];

      if (inputVal.length >= int) {
        const checkArr = [];

        for (let i = 0; i < inputVal.length - int + 1; i++) {
          checkArr.push(inputVal.slice(i, int + i));
        }
        
        for (let j = 0; j < newItems.length; j++) {
          if (index !== j) {
            const val = newItems[j].inputVal;

            for (let k = 0; k < checkArr.length; k++) {
              if (val.indexOf(checkArr[k]) !== -1) {
                collisionIdx.push(j);
                break;
              }
            }
            
          }
        }
      }

      newCollisionList[index] = collisionIdx;
    });

    setCollisionList(newCollisionList);
  };

  const deleteItem = itemId => {
    setItems(items.filter(item => itemId !== item.id));
  };

  const addItem = () => {
    setItems([
      ...items,
      {
        id: maxItemId,
        inputVal: ""
      }
    ]);

    setMaxItemId(maxItemId + 1);
  };

  const changeInput = (event, itemId) => {
    setItems(items.map(item => {
      if (itemId !== item.id) return item;
      return {
        ...item,
        inputVal: event.target.value.replace(/ /g, '').toUpperCase()
      }
    }));
  };

  const isFirstRender = useRef(true);

  useEffect(() => {
    // prevent to check collision on the first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    checkCollision(items, int);
  }, [items, int]);
  
  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <Header as='h3' block icon='cubes' content='Collision Analyzer' />
      {items.length ? <Segment.Group>
        {items.map((item, index) => (
          <InputBox 
            key={item.id} 
            index={index} 
            item={item} 
            collisionList={collisionList}
            handleDelete={itemId => deleteItem(itemId)}
            handleInputChange={(e, itemId) => changeInput(e, itemId)}
          />
        ))}
      </Segment.Group> : null}
      <Segment compact textAlign='center'>
        <div style={{ marginBottom: '.5rem' }}>
          <button 
            className="ui button primary"
            onClick={addItem}
          >
            Add
          </button>
        </div>
        <div>
          <Input 
            type="number" 
            style={{ width: '68px' }}
            value={int}
            onChange={e => setInt(e.target.value)}
            data-testid="input-number"
            />
        </div>
      </Segment>
      
    </div>
  );
}

export default App;
