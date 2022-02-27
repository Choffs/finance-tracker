



const GenID = (bits)=>{
  let bitArr = ''
  for(; bits > 0;bits--){
      bitArr += (Math.random()> .5) ? '1' : '0';
  }

  return parseInt(bitArr, 2);
}

export default GenID;
