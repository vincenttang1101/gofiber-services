import { PathEnum } from './enum'

export type MegaMenus = {
  parent_category: string
  sub_categories: {
    name: string
    items: {
      name: string
      isHot: boolean
      link: PathEnum
    }[]
  }[]
  link: PathEnum | null
}

export const MegaMenus: MegaMenus[] = [
  {
    parent_category: 'Sản phẩm',
    sub_categories: [
      {
        name: 'Thuê VPS',
        items: [
          {
            name: 'Cloud VPS 1 GB',

            isHot: false,
            link: PathEnum['thue-vps']
          },
          {
            name: 'Cloud VPS 2 GB',
            isHot: true,
            link: PathEnum['thue-vps']
          },
          {
            name: 'Cloud VPS 4 GB',
            isHot: false,
            link: PathEnum['thue-vps']
          }
        ]
      },
      {
        name: 'AAPanel VPS',
        items: [
          {
            name: 'AAPanel',
            isHot: false,
            link: PathEnum['aapanel']
          }
        ]
      },
      {
        name: 'Thuê máy chủ vật lý',
        items: [
          {
            name: 'Computer S1',
            isHot: false,
            link: PathEnum['thue-may-chu-vat-ly']
          },
          {
            name: 'Location S1',
            isHot: true,
            link: PathEnum['thue-may-chu-vat-ly']
          }
        ]
      },
      {
        name: 'Web Hosting',
        items: [
          {
            name: 'Cá Nhân Cao Cấp',
            isHot: false,
            link: PathEnum['dich-vu-hosting']
          },
          {
            name: 'Website hosting cho doanh nghiệp',
            isHot: true,
            link: PathEnum['dich-vu-hosting']
          },
          {
            name: 'Website hosting cho doanh nghiệp PRO',
            isHot: false,
            link: PathEnum['dich-vu-hosting']
          }
        ]
      }
    ],
    link: null
  },
  {
    parent_category: 'Hosting',
    sub_categories: [],
    link: PathEnum['dich-vu-hosting']
  },
  {
    parent_category: 'Server',
    sub_categories: [],
    link: PathEnum['thue-may-chu-vat-ly']
  },
  {
    parent_category: 'VPS',
    sub_categories: [],
    link: PathEnum['thue-vps']
  },
  {
    parent_category: 'Thiết kế Website',
    sub_categories: [],
    link: PathEnum['dich-vu-thiet-ke-website-chuyen-nghiep']
  },
  {
    parent_category: 'Tin tức',
    sub_categories: [],
    link: PathEnum['tin-tuc']
  }
]
