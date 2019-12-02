module.exports = (inputData, outputNumber) => {
  const initialMemory = inputData.split(',').map(str => parseInt(str));

  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      let intCode = [...initialMemory];
      intCode[1] = noun;
      intCode[2] = verb;

      for (let i = 0; intCode[i] < 100; i += 4) {
        let opCode = intCode[i];
        let address1 = intCode[i + 1];
        let address2 = intCode[i + 2];
        let address3 = intCode[i + 3];

        if (opCode === 1)
          intCode[address3] = intCode[address1] + intCode[address2];
        else if (opCode === 2)
          intCode[address3] = intCode[address1] * intCode[address2];
        else if (opCode === 99) break;
      }

      if (intCode[0] === outputNumber) {
        return noun * 100 + verb;
      }
    }
  }
};
