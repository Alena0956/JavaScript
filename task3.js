const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
]

// helpers 

function employeesCountHelper(count){
  lastNumber = count.toString().split('').pop()
  if (lastNumber && count) {
    if (lastNumber == 1) return `${count} сотрудник`
    else if (lastNumber >= 2 && lastNumber < 5) return `${count} сотрудника`
    else return `${count} сотрудников`
    }
    else return 'нет сотрудников'
}

const getNewId = function(company){
  maxID = 0;
  company.forEach(comp =>{
    if (maxID < comp.id) maxID = comp.id
    if (comp.departments){
      comp.departments.forEach(dept =>{
        if (maxID < dept.id) maxID = dept.id
      })
    }
  })
  return maxID + 1
}

const getEnterprise = function(val){
  company = enterprises.find(el => el.id === val || el.name === val)
  return company ? company : `Enterprises doesn't have such company with ${val}`
}
// console.log(getEnterprise(11))

const getDepartment = function(val){
  let department;
  enterprises.forEach(comp => {
    const dept = comp.departments.find( el => {
      return el.id === val || el.name === val
    })
    if (dept) department = dept
  }) 
return department ? department : false
}
// console.log(getDepartment(10))

// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников.
// Для предприятия посчитать сумму всех сотрудников во всех отделах.
// **Пример:**
// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)


// enterprises.forEach(element => {
//   totalemployees = []
//   element.departments.forEach(el => {
//     totalemployees.push(el.employees_count)})
//     totalemployees = + totalemployees.reduce((sum, elem) => sum + elem)
//     console.log(`${element.name} (${totalemployees} сотрудников)`)
//   element.departments.forEach(el => {
//     console.log(`- ${el.name} (${el.employees_count} сотрудников)`)
// })   
// });

function getStructure(company){
  company.forEach(comp => {
    departs = []
    count = 0
    departs.push(comp.name)
    if (comp.departments){
      comp.departments.forEach(dep => {
        count += dep.employees_count
        departs.push(`- ${dep.name} (${employeesCountHelper(dep.employees_count)})`)
      })
      departs[0] += ` (${employeesCountHelper(count)})`
    }
    console.log(departs.join('\n'))
  });
  
}

// getStructure(enterprises)

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, 
// к которому относится).
// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

function getEnterpriseName(val){
  let enterprise;
  enterprises.forEach(ent => {
    let department;
    if (ent.departments){
      department = ent.departments.find(dept => {return dept.id === val || dept.name === val})
    }
    if (department) enterprise = ent
  });
 return enterprise ? enterprise.name : `Нет такого предприятия с id = ${val} или name = ${val}` 
  
}
// console.log(getEnterpriseName(8))

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
// Пример:
// addEnterprise("Название нового предприятия")

const addNewEnterprise = function(name){
  enterprises.push({
    id: getNewId(enterprises),
    name: name,
    departments: []
})
}

addNewEnterprise('DevOps')
// console.log(enterprises)

// 4. Написать функцию, которая будет добавлять отдел в предприятие. 
// В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
// Пример:
// addDepartment(1, "Название нового отдела")

const addDepartment = function(idEnterprise, nameDepartment, count = 0){
  enterprise = getEnterprise(idEnterprise)
  if (enterprise) enterprise.departments.push({
    id: getNewId(enterprises),
    name: nameDepartment,
    employees_count: count,
  })
}
addDepartment(11,'Sisadmin', 34)

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
// Пример:
// editEnterprise(1, "Новое название предприятия")

const editEnterprise = function(val, name){
  let company = getEnterprise(val)
  if (company) company.name = name
  else throw new error ('No such enterprise')
}
editEnterprise(11, 'Developers')
// console.log(enterprises[3])


// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
// Пример:
// editDepartment(7, "Новое название отдела")

const editDepartment = function(val, name){
  let dept = getDepartment(val)
  if (dept) dept.name = name
  else throw new Error ('No such department')
}

editDepartment(12,'HR')
// console.log(enterprises[3])

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

const deleteEnterprise = function(val){
  let index = enterprises.findIndex(el => el.id === val)
  enterprises.splice(index,1)  
}
// deleteEnterprise(9)
// console.log(enterprises[2])

// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
const deleteDepartment = function(val){
  enterprises.forEach(el => {
    index = el.departments.findIndex(e => e.id === val && e.employees_count === 0)
    if (index !== -1) {
      el.departments.splice(index,1)}
  })
}

// deleteDepartment(10)

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. 
// В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

const moveEmployees = function(currentID, newID){
  let current = getDepartment(currentID)
  let newDept = getDepartment(newID)
  if (current && newDept && getEnterpriseName(currentID) === getEnterpriseName(newID)) {
    newDept.employees_count += current.employees_count
    current.employees_count = 0
  } else throw new Error('Something went wrong')
}

moveEmployees(2,3)
// console.log(enterprises[0])