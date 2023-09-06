import { SiteType } from 'types';

export const useWebSite = () => {
  return useState('WebSite', (): SiteType => {
    return {
      _id: '',
      site_id: '',
      type_id: '',
      date: '',
      version_id: '',
      title: '',
      keywords: '',
      description: '',
      company_name: '',
      logo_img: '',
      header_bj: '',
      url: '',
      header: '',
      inscribe: '',
      proportion_integral: '',
      tel: '',
      qq: '',
      version_name: '',
      sms_number: '',
      mobile: '',
    };
  });
};
