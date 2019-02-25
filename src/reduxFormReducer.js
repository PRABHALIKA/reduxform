const init={
    'msg':''
}
const reduxFormReducer=(state=init,newData)=>{
      if(newData.type=='REG_SUCCESS'){
            state={
                ...state,
                'msg':"Success"
            }
      } else if(newData.type=='REG_FAIL'){
        state={
            ...state,
            'msg':"fail"
        }
      }

      return state;
}

export default reduxFormReducer;