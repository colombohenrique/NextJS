export default function handler(req, res) {
  console.log(req)

  res.status(200).json([
    {
      name: "José Henrique",
      idade: "25"
    }
    ,
    {
      name: "Teste",
      idade:"25"
    }
  ])
}
