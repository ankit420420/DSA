const final = {
  values: [
    {
      ImtId: "671",
      Receiver: [
        {
          id: "1",
          firstName: "Sherry",
          displayName: "Zhixia ZX3 Tian",
          emailAddress: "Sherry.Tian@lcfuturecenter.com",
        },
      ],
    },
  ],
};

let result = final.values.find((item) => item.ImtId === "671");
console.log("result:", result);
console.log("final:", JSON.stringify(final, null, 2));
console.log("=====================");

result.Receiver.push({
    id: "11",
    firstName: "Sherry1",
    displayName: "Zhixia ZX3 Tian1",
    emailAddress: "Sherry.Tian@lcfuturecenter.com1",
});
console.log("new result:", result);
console.log("new final:", JSON.stringify(final, null, 2));
