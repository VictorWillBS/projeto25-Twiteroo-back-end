import db from "./database.js";
import { faker } from '@faker-js/faker';
import Usuario from "../class/usuario.js";
export function seed () {
  for(let i = 0; i<=9; i++){
    console.log(i)
    const name = faker.random.word()
    const tweet =faker.random.word()
    const user = new Usuario(name,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gXPWxo_fQPzvP2TNGFtHzqQiChF6VklO68Fydsig_A69sVnizAMg_bxzCLvFEDMpwI8&usqp=CAU')
    db.addUsuario(user)
    db.addTweet({...user,tweet})
  }
  console.log(db)
}