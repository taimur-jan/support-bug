import useJwt from './../../@core/auth/jwt/useJwt'
import axios from './../../libs/axios'

const { jwt } = useJwt(axios, {})
export default jwt
