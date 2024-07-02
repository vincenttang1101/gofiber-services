import { PathEnum } from './enum'

export type ImageConfigs = {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export type Banner = {
  title: string
  descs: string[]
  imageConfigs: ImageConfigs
}

type Banners = Omit<Record<keyof typeof PathEnum, Banner>, 'home' | 'tin-tuc'>

export const Banners: Banners = {
  'dich-vu-hosting': {
    title: 'Dịch vụ hosting, web hosting',
    descs: [
      'Các dịch vụ công nghệ do GOFIBER cung cấp như dịch vụ hosting, web hosting chất lượng,... mang đến sự khác biệt với tính ổn định cao, tốc độ truy cập nhanh, UPTIME lên đến 99%, miễn phí chứng chỉ SSL trọn đời, hỗ trợ kỹ thuật 24/7.',
      'Hosting cao cấp tại GOFIBER được trang bị ổ cứng NVMe và SSD Enterprise RAID-10, hỗ trợ đắc lực cho tốc độ truy cập của website, cùng băng thông không giới hạn đáp ứng nhu cầu của đại đa số các khách hàng hiện nay.'
    ],
    imageConfigs: {
      src: '/images/web-hosting.webp',
      alt: 'Web Hosting',
      width: 710,
      height: 460,
      className: 'w-[710px] h-[460px]'
    }
  },
  'thue-may-chu-vat-ly': {
    title: 'Thuê Server, máy chủ vật lý , nơi đặt máy chủ vật lý',
    descs: [
      'Các dịch vụ công nghệ do  cung cấp như dịch vụ hosting, web hosting chất lượng,... mang đến sự khác biệt với tính ổn định cao, tốc độ truy cập nhanh, UPTIME lên đến 99%, miễn phí chứng chỉ SSL trọn đời, hỗ trợ kỹ thuật 24/7.',
      'Hosting cao cấp tại  được trang bị ổ cứng NVMe và SSD Enterprise RAID-10, hỗ trợ đắc lực cho tốc độ truy cập của website, cùng băng thông không giới hạn đáp ứng nhu cầu của đại đa số các khách hàng hiện nay.'
    ],
    imageConfigs: {
      src: '/images/server.webp',
      alt: 'Server',
      width: 850,
      height: 605,
      className: 'w-[850px] h-[605px]'
    }
  },
  'thue-vps': {
    title: 'Thuê Server, máy chủ vật lý , nơi đặt máy chủ vật lý',
    descs: [
      'Các dịch vụ công nghệ do  cung cấp như dịch vụ hosting, web hosting chất lượng,... mang đến sự khác biệt với tính ổn định cao, tốc độ truy cập nhanh, UPTIME lên đến 99%, miễn phí chứng chỉ SSL trọn đời, hỗ trợ kỹ thuật 24/7.',
      'Giải pháp máy chủ điện toán đám mây (cloud server/cloud VPS) của được xây dựng trên nền tảng công nghệ ảo hóa tiên tiến KVM cùng hệ thống hạ tầng mạnh mẽ. Bấm nút DÙNG THỬ bên dưới để trải nghiệm thử dịch vụ máy chủ VPS hiệu suất với chi phí hợp lý nhất. Chỉ thanh toán khi cảm thấy hài lòng!'
    ],
    imageConfigs: {
      src: '/images/virtual-server.webp',
      alt: 'Virtual Server',
      width: 626,
      height: 626,
      className: 'w-[626px] h-[626px]'
    }
  },
  'dich-vu-thiet-ke-website-chuyen-nghiep': {
    title: 'Thiết kế Website',
    descs: [
      'Dù là một doanh nghiệp non trẻ nhưng những nhân sự mà GOFIBER đang có đều là những chuyên gia trong lĩnh vực, đặc biệt là Thiết kế website giá rẻ. Chúng tôi vui mừng và vinh dự khi được rất đông các khách hàng có nhu cầu xây dựng website kinh doanh tin tưởng và trao cho chúng tôi cơ hội được phục vụ.',
      'Nhận thấy nhu cầu của các khách hàng vẫn còn rất lớn, nhất là cho các website phổ thông như website giới thiệu doanh nghiệp, website công ty, website bán hàng… Chúng tôi đã đi trước và cho xây dựng sẵn kho mẫu website để tiện lợi hơn cho khách hàng trong việc lựa chọn và xây dựng website của mình.'
    ],
    imageConfigs: {
      src: '/images/web-design.webp',
      alt: 'Web Design',
      width: 612,
      height: 612,
      className: 'w-[612px] h-[612px]'
    }
  },
  aapanel: {
    title: 'AAPanel VPS',
    descs: [
      'Dù là một doanh nghiệp non trẻ nhưng những nhân sự mà GOFIBER đang có đều là những chuyên gia trong lĩnh vực, đặc biệt là Thiết kế website giá rẻ. Chúng tôi vui mừng và vinh dự khi được rất đông các khách hàng có nhu cầu xây dựng website kinh doanh tin tưởng và trao cho chúng tôi cơ hội được phục vụ.',
      'Nhận thấy nhu cầu của các khách hàng vẫn còn rất lớn, nhất là cho các website phổ thông như website giới thiệu doanh nghiệp, website công ty, website bán hàng… Chúng tôi đã đi trước và cho xây dựng sẵn kho mẫu website để tiện lợi hơn cho khách hàng trong việc lựa chọn và xây dựng website của mình.'
    ],
    imageConfigs: {
      src: '/images/aapanel.webp',
      alt: 'AA Panel',
      width: 646,
      height: 604,
      className: 'w-[646px] h-[604px]'
    }
  },
  'dich-vu-quan-tri-website': {
    title: 'Dịch vụ quản trị website',
    descs: [
      'Dù là một doanh nghiệp non trẻ nhưng những nhân sự mà GOFIBER đang có đều là những chuyên gia trong lĩnh vực, đặc biệt là Thiết kế website giá rẻ. Chúng tôi vui mừng và vinh dự khi được rất đông các khách hàng có nhu cầu xây dựng website kinh doanh tin tưởng và trao cho chúng tôi cơ hội được phục vụ.',
      'Nhận thấy nhu cầu của các khách hàng vẫn còn rất lớn, nhất là cho các website phổ thông như website giới thiệu doanh nghiệp, website công ty, website bán hàng… Chúng tôi đã đi trước và cho xây dựng sẵn kho mẫu website để tiện lợi hơn cho khách hàng trong việc lựa chọn và xây dựng website của mình.'
    ],
    imageConfigs: {
      src: '/images/default.webp',
      alt: 'Default',
      width: 600,
      height: 400,
      className: 'w-[600px] h-[400px]'
    }
  },
  'dich-vu-noi-dung-chat-luong': {
    title: 'Dịch vụ nội dung chất lượng',
    descs: [
      'Xây dựng nội dung chất lượng cho website là một trong những yếu tố hàng đầu giúp website tăng thêm giá trị và tiếp cận được nhiều người dùng hơn.Dịch vụ nội dung chất lượng của Gofiber là giải pháp tối ưu cho các cá nhân và doanh nghiệp sở hữu website, giúp các chủ website tiết kiệm thời gian và chi phí nhưng vẫn có được kết quả như mong muốn.'
    ],
    imageConfigs: {
      src: '/images/default.webp',
      alt: 'Default',
      width: 644,
      height: 440,
      className: 'w-[600px] h-[400px]'
    }
  },
  'dich-vu-seo-tong-the': {
    title: 'Dịch vụ SEO tổng thể',
    descs: [
      'Dịch vụ SEO tổng thể chuyên nghiệp và có độ uy tín cao dễ dàng giúp website của bạn đạt được mục tiêu tăng cường hiển thị trên kết quả tìm kiếm tự nhiên (organic search results), tăng lưu lượng truy cập, cải thiện lượng tương tác của khách hàng và cuối cùng là đạt được mục tiêu kinh doanh như mong đợi.'
    ],
    imageConfigs: {
      src: '/images/default.webp',
      alt: 'Default',
      width: 600,
      height: 400,
      className: 'w-[600px] h-[400px]'
    }
  },
  'dich-vu-seo-tu-khoa': {
    title: 'Dịch vụ SEO từ khóa',
    descs: ['Nội dung dịch vụ SEO từ khóa'],
    imageConfigs: {
      src: '/images/default.webp',
      alt: 'Default',
      width: 600,
      height: 400,
      className: 'w-[600px] h-[400px]'
    }
  },
  'dich-vu-entity-seo': {
    title: 'Dịch vụ Entity SEO',
    descs: ['Nội dung dịch vụ Entity SEO'],
    imageConfigs: {
      src: '/images/default.webp',
      alt: 'Default',
      width: 600,
      height: 400,
      className: 'w-[600px] h-[400px]'
    }
  },
  'dich-vu-lap-trinh-web-app-theo-yeu-cau': {
    title: 'Dịch vụ lập trình web app theo yêu cầu',
    descs: ['Nội dung dịch vụ lập trình web app theo yêu cầu'],
    imageConfigs: {
      src: '/images/default.webp',
      alt: 'Default',
      width: 600,
      height: 400,
      className: 'w-[600px] h-[400px]'
    }
  }
}
