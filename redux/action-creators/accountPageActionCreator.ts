
//=================отправка GET запроса на получение данных о акаунте========================
export async function initAccount(dispatch: ()=> void) {
    const response = await fetch('/api/init/account')
    const responseData = await response.json()
    console.log(responseData)
}
// *******************************************************************************************
