import { Label, Input, Segment } from 'semantic-ui-react';

const InputBox = ({ index, item, collisionList, handleDelete, handleInputChange }) => {
  return (
    <Segment basic role="inputbox">
      <Label size="large" role="label">{index}</Label>
      <Input 
        type="text" 
        style={{ marginRight: '.8rem' }}
        value={item.inputVal} 
        onChange={e => handleInputChange(e, item.id)}
        data-testid="input-string"
      />
      <button 
        className="ui button red icon"
        onClick={() => handleDelete(item.id)}
      >
        <i aria-hidden="true" className="trash alternate outline icon"></i>
      </button>
      <Input 
        type="text"
        style={{ marginLeft: '.8rem' }}
        value={collisionList[index] ? collisionList[index].join(',') : ''}
        data-testid="input-collision"
        disabled
        readOnly 
      />
    </Segment>
  );
};

export default InputBox;