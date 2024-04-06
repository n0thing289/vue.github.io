import { ElMessage } from 'element-plus'
export const msg = (msg) => {
    ElMessage(msg || 'This is a message.')
}
export const succMsg = (msg) => {
    ElMessage({
        message: msg || 'Congrats, this is a success message.',
        type: 'success',
    })
}
export const warnMsg = (msg) => {
    ElMessage({
        message: msg || 'Warning, this is a warning message.',
        type: 'warning',
    })
}
export const errMsg = (msg) => {
    ElMessage.error(msg || 'Oops, this is a error message.')
}