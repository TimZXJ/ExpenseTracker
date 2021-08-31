const mongoose = require('mongoose')
const Record = require('../record')//load Record model

mongoose.connect(`mongodb://localhost/Expense`, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

//create seed data
const recordData = [
  { id: 1, name: '午餐', date: '2019-04-23', amount: 60, category: '餐飲食品' },
  { id: 2, name: '晚餐', date: '2019-04-23', amount: 60, category: '餐飲食品' },
  { id: 3, name: '捷運', date: '2019-04-23', amount: 120, category: '交通出行' },
  { id: 4, name: '電影：驚奇隊長', date: '2019-04-23', amount: 220, category: '休閒娛樂' },
  { id: 5, name: '租金', date: '2015-04-01', amount: 25000, category: '家居物業' }
]

//setting connecting status
db.on('error', () => {
  console.log('Mongodb error')
})
db.once('open', () => {
  recordData.forEach(record => {
    Record.create({
      id: record.id,
      name: record.name,
      date: record.date,
      amount: record.amount,
      category: record.category,
    })
  })
  
  console.log('done!')
})