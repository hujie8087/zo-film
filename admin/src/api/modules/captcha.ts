import { Captcha } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";

/**
 * @name 图形验证码模块
 */
// 获取图形验证码
export const getCaptcha = () => {
  return http.get<Captcha.ResCaptcha>(PORT1 + `/captcha?random=${Math.random()}`);
};

// 验证图形验证码
export const sendCaptcha = (params: { captcha: string }) => {
  return http.post<Captcha.ResCaptcha>(PORT1 + `/verify`, params);
};
