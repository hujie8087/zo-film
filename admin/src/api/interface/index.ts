// 请求响应参数（不包含data）
export interface Result {
  code: number;
  msg: string;
}

// 请求响应参数（包含data）
export interface ResultData<T = any> extends Result {
  data: T;
}

// 分页响应参数
export interface ResPage<T> {
  list: T[];
  pageNum: number;
  pageSize: number;
  total: number;
}

// 分页请求参数
export interface ReqPage {
  pageNum: number;
  pageSize: number;
}

// 图形验证码模块
export namespace Captcha {
  export interface ResCaptcha {
    data: any;
  }
  // 验证图形验证码
  export interface ReqCaptcha {
    captcha: string;
    captchaId: string;
  }
}

// 文件上传模块
export namespace Upload {
  export interface ResFileUrl {
    fileUrl: string;
  }
}

// 登录模块
export namespace Login {
  export interface ReqLoginForm {
    username: string;
    password: string;
  }
  export interface ReqLoginFormParams extends ReqLoginForm {
    captcha: string;
  }
  export interface ResLogin {
    access_token: string;
    username: string;
  }
  export interface ResAuthButtons {
    [key: string]: string[];
  }
}

// 用户管理模块
export namespace User {
  export interface ReqUserParams extends ReqPage {
    username: string;
    gender: number;
    idCard: string;
    email: string;
    address: string;
    createTime: string[];
    status: number;
  }
  export interface ResUserList {
    id: string;
    username: string;
    gender: number;
    user: { detail: { age: number } };
    idCard: string;
    email: string;
    address: string;
    createTime: string;
    status: number;
    avatar: string;
    photo: any[];
    children?: ResUserList[];
  }
  export interface ResStatus {
    userLabel: string;
    userValue: number;
  }
  export interface ResGender {
    genderLabel: string;
    genderValue: number;
  }
  export interface ResDepartment {
    id: string;
    name: string;
    children?: ResDepartment[];
  }
  export interface ResRole {
    id: string;
    name: string;
    children?: ResDepartment[];
  }
  export interface ReqChangePassword {
    oldPassword: string;
    newPassword: string;
    username: string;
  }
}

export namespace Classify {
  export interface ReqClassifyParams extends ReqPage {
    title: string;
    status: number;
  }
  export interface ResClassifyList {
    _id: string;
    date: string;
    pid: string;
    pid_name: string;
    title: string;
    keywords: string;
    description: string;
    url: string;
    note: string;
    en_title: string;
    content: string;
    intro: string;
    sort: number;
    image_url: string;
    page_img: string;
    is_delete: boolean;
    sub_title: string;
    remark: string;
    upload_img: string;
    status: number;
  }
  export interface ResStatus {
    statusLabel: string;
    statusValue: number;
  }
}

export namespace Comment {
  export interface ReqComment {
    classify_name?: string;
    classify_pid?: string;
    type_id?: string;
  }
  export interface ReqCommentParams extends ReqPage, ReqComment {}
  export interface ResCommentList {
    _id: string;
    classify_id: string;
    classify_pid: string;
    type_id: string;
    level_id: string;
    date: string;
    title: string;
    keywords: string;
    description: string;
    version_id: string;
    note: string;
    classify_name: string;
    classify_url: string;
    classify_note: string;
    en_name: string;
    classify_intro: string;
    classify_img: string;
    page_img: string;
    is_delete: boolean;
    sub_name: string;
    beizhu: string;
    classify_intro2: string;
    upload_img: string;
    sort: number;
  }
  export interface ResCommentTree extends ResCommentList {
    children?: ResCommentTree[];
  }
  export interface ResStatus {
    label: string;
    value: string;
  }
}
