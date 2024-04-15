const Agenda = require("../models/model.agenda")



async function criarAgenda(req,res){
   const {nome,
    email,
    telefone,
    funcionario,
    data,
    hora,
    endereco,
    servicos}=req.body
    try {
      


      const agenda= await  Agenda.create({
        nome,
        email,
        telefone,
        funcionario,
        data,
        hora,
        endereco,
        servicos
      }).then((agenda)=>{
        return res.json({
          message:'agenda marcada, por favor aguarda o nosso contacto',
          agenda
        })
      })
      .catch((error)=>{
        console.log("nao foi possivel criar uma agenda")
        return res.json({
          message:"Nao foi possivel criar uma agenda"
        })
      })
        
    } catch (error) {
        console.log(error)
        
    }
}

async function listarTodasAgendas(req, res) {
  try {
    const agendas = await Agenda.findAll({
      order:[["data","DESC"]]
    });
    const countAgendas = await Agenda.findAndCountAll();

    if (agendas.length > 0) {
      return res.status(200).json({
        message: "Agendas encontradas com sucesso",
        agendas,
        agendasMarcadas:countAgendas.count
      });
    } else {
      return res.status(404).json({
        message: "Nenhuma agenda encontrada"
      });
    }
  } catch (error) {
    console.error("Erro ao buscar agendas:", error);
    return res.status(500).json({
      message: "Erro interno ao buscar agendas"
    });
  }
}
module.exports={listarTodasAgendas,criarAgenda}