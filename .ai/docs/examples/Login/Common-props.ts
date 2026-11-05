/**
 * login-common — 通用登录（三种账号登录 + 微信/QQ 第三方）
 * 模板：Login/demos/Common/
 * create-page-login 问答 → page-spec.json → 按此替换模板动态内容
 */
import type { ApiEndpointSpec, PageOutputSpec } from '../types/PageTemplate.types'

/** 账号登录：phone=本机号一键；code=手机验证码；user=用户名密码 */
export type LoginAccountMethod = 'phone' | 'code' | 'user'

/** 第三方：wechat=微信；qq=QQ */
export type LoginSocialMethod = 'wechat' | 'qq'

export type LoginMethod = LoginAccountMethod | LoginSocialMethod

export interface LoginCommonPageProps {
  templateId: 'login-common'
  output: PageOutputSpec
  /** Q1 勾选的登录方式；至少含一种账号方式 */
  loginMethods: LoginMethod[]
  api: {
    /** → UserLoginPage/api/loginByUsername/；用户名 + 密码 */
    loginByUsername?: ApiEndpointSpec
    /** → CodeLoginPage/api/sendLoginCode/；手机号码 */
    sendLoginCode?: ApiEndpointSpec
    /** → CodeLoginPage/api/loginByPhoneCode/；手机号码 + 验证码 */
    loginByPhoneCode?: ApiEndpointSpec
    /** → PhoneLoginPage/api/loginByPhoneOneClick/；手机号码 + 运营商编码（请求字段名为 code） */
    loginByPhoneOneClick?: ApiEndpointSpec
    /**
     * 本机号码：模板用 Bridge.getPhoneNumber，不是 HTTP。
     * 成功后 phoneNumber → 手机号码，code → 运营商编码 carrierCode
     */
    queryPhoneNumber?: {
      source: 'bridge'
    }
    /** → SocialButtons 微信登录；未填 url 时保留 Toast 占位 */
    loginByWeChat?: ApiEndpointSpec
    /** → SocialButtons QQ 登录；未填 url 时保留 Toast 占位 */
    loginByQq?: ApiEndpointSpec
  }
}
