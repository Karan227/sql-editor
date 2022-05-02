import React from 'react'
import AceEditor from "react-ace";
import Button from './ExecButton';

import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/ext-language_tools";



const Input = ({ setQuery, value, setValue, val, toggleVal }) => {
  function onChange(newValue) {
    setValue(newValue);
  }

  function onSubmit(){
    var Table_name = value.toLowerCase().slice(value.indexOf("from") + "from".length);
    setQuery(Table_name.split(" ")[1]);
    toggleVal(val^1);
  }
  return (
    <div className='input'>
    <AceEditor
        mode="mysql"
        theme="solarized_dark"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        fontSize={18}
        placeholder="Write your Query here..."
        width='75%'
        minLines={20}
        maxLines={30}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        value={value}

    />
    <Button classVal="exec-btn" eventTrigger={onSubmit}>Execute</Button>
    </div>
  )
}

export default Input
