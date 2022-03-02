const radiologias = [{
        "HORA": "11:00",
        "ESPECIALISTA": "IGNACIO SCHULZ",
        "PACIENTE": "FRANCISCA ROJAS",
        "RUT": "9878782-1",
        "PREVISION": "FONASA"
    },
    {
        "HORA": "11:30",
        "ESPECIALISTA": "FEDERICO SUBERCASEAUX",
        "PACIENTE": "PAMELA ESTRADA",
        "RUT": "15345241-3",
        "PREVISION": "ISAPRE"
    },
    {
        "HORA": "15:00",
        "ESPECIALISTA": "FERNANDO WURTHZ",
        "PACIENTE": "ARMANDO LUNA",
        "RUT": "16445345-9",
        "PREVISION": "ISAPRE"
    },
    {
        "HORA": "15:30",
        "ESPECIALISTA": "ANA MARIA GODOY",
        "PACIENTE": "MANUEL GODOY",
        "RUT": "17666419-0",
        "PREVISION": "FONASA"
    },
    {
        "HORA": "16:00",
        "ESPECIALISTA": "PATRICIA SUAZO",
        "PACIENTE": "RAMON ULLOA",
        "RUT": "14989389-K",
        "PREVISION": "FONASA"
    },
]

const traumatologia = [{
        "HORA": "8:00",
        "ESPECIALISTA": "MARIA PAZ ALTUZARRA",
        "PACIENTE": "PAULA SANCHEZ",
        "RUT": "15554774-5",
        "PREVISION": "FONASA"
    },
    {
        "HORA": "10:00",
        "ESPECIALISTA": "RAUL ARAYA",
        "PACIENTE": "ANGÉLICA NAVAS",
        "RUT": "15444147-9",
        "PREVISION": "ISAPRE"
    },
    {
        "HORA": "10:30",
        "ESPECIALISTA": "MARIA ARRIAGADA",
        "PACIENTE": "ANA KLAPP",
        "RUT": "17879423-9",
        "PREVISION": "ISAPRE"
    },
    {
        "HORA": "11:00",
        "ESPECIALISTA": "ALEJANDRO BADILLA",
        "PACIENTE": "FELIPE MARDONES",
        "RUT": "1547423-6",
        "PREVISION": "ISAPRE"
    },
    {
        "HORA": "11:30",
        "ESPECIALISTA": "CECILIA BUDNIK",
        "PACIENTE": "DIEGO MARRE",
        "RUT": "16554741-K",
        "PREVISION": "FONASA"
    },
    {
        "HORA": "12:00",
        "ESPECIALISTA": "ARTURO CAVAGNARO",
        "PACIENTE": "CECILIA MENDEZ",
        "RUT": "9747535-8",
        "PREVISION": "ISAPRE"
    },
    {
        "HORA": "12:30",
        "ESPECIALISTA": "ANDRES KANACRI",
        "PACIENTE": "MARCIAL SUAZO",
        "RUT": "11254785-5",
        "PREVISION": "ISAPRE"
    }
]

const dental = [{
        "HORA": "8:30",
        "ESPECIALISTA": "ANDREA ZUÑIGA",
        "PACIENTE": "MARCELA RETAMAL",
        "RUT": "11123425-6",
        "PREVISION": "ISAPRE"
    },
    {
        "HORA": "11:00",
        "ESPECIALISTA": "MARIA PIA ZAÑARTU",
        "PACIENTE": "ANGEL MUÑOZ",
        "RUT": "9878789-2",
        "PREVISION": "ISAPRE"
    },
    {
        "HORA": "11:30",
        "ESPECIALISTA": "SCARLETT WITTING",
        "PACIENTE": "MARIO KAST",
        "RUT": "7998789-5",
        "PREVISION": "FONASA"
    },
    {
        "HORA": "13:00",
        "ESPECIALISTA": "FRANCISCO VON TEUBER",
        "PACIENTE": "KARIN FERNANDEZ",
        "RUT": "18887662-K",
        "PREVISION": "FONASA"
    },
    {
        "HORA": "13:30",
        "ESPECIALISTA": "EDUARDO VIÑUELA",
        "PACIENTE": "HUGO SANCHEZ",
        "RUT": "17665461-4",
        "PREVISION": "FONASA"
    },
    {
        "HORA": "14:00",
        "ESPECIALISTA": "RAQUEL VILLASECA",
        "PACIENTE": "ANA SEPULVEDA",
        "RUT": "14441281-0",
        "PREVISION": "ISAPRE"
    },
]

const primAtencionRadio = document.getElementById("primAtencionRadio")
const ultAtencionRadio = document.getElementById("ultAtencionRadio")
const primAtencionTraum = document.getElementById("primAtencionTraum")
const ultAtencionTraum = document.getElementById("ultAtencionTraum")
const primAtencionDental = document.getElementById("primAtencionDental")
const ultAtencionDental = document.getElementById("ultAtencionDental")

primAtencionRadio.innerHTML = `${radiologias[0].PACIENTE} - ${radiologias[0].PREVISION}`
ultAtencionRadio.innerHTML = `${radiologias[radiologias.length - 1].PACIENTE} - ${radiologias[radiologias.length - 1].PREVISION}`
primAtencionTraum.innerHTML = `${traumatologia[0].PACIENTE} - ${traumatologia[0].PREVISION}`
ultAtencionTraum.innerHTML = `${traumatologia[traumatologia.length - 1].PACIENTE} - ${traumatologia[traumatologia.length - 1].PREVISION}`
primAtencionDental.innerHTML = `${dental[0].PACIENTE} - ${dental[0].PREVISION}`
ultAtencionDental.innerHTML = `${dental[dental.length - 1].PACIENTE} - ${dental[dental.length - 1].PREVISION}`

const tablaRadio = document.getElementById("tablaRadio")
const tablaTrauma = document.getElementById("tablaTrauma")
const tablaDental = document.getElementById("tablaDental")

const tabla = (atencion) => {
    return `<tr>
    <td>${atencion.HORA}</td>
    <td>${atencion.ESPECIALISTA}</td>
    <td>${atencion.PACIENTE}</td> 
    <td>${atencion.RUT}</td>
    <td>${atencion.PREVISION}</td>
    </tr>`
}
for (consuRadio of radiologias) {
    tablaRadio.innerHTML += tabla(consuRadio)
}
for (consuTrauma of traumatologia) {
    tablaTrauma.innerHTML += tabla(consuTrauma)
}
for (consuDental of dental) {
    tablaDental.innerHTML += tabla(consuDental)
}