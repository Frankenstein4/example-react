
import ThemedButton from '../../BaseComponent/base' ;

export default function Toolbar(props) {
    return (
      <div>
        <ThemedButton step={props.step} number={props.number} count={props.count} />
      </div>
    );
  }