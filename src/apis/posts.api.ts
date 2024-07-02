import { createQueryParams } from '@/libs/utils'
import BaseHttpClient from '@/services/base-http-client.service'
import { PaginationParams } from '@/types/common.type'
import { GetPostsByCateParams } from '@/types/posts.type'

interface GetPostsByCate extends PaginationParams, GetPostsByCateParams {}

class PostsClient extends BaseHttpClient {
  constructor() {
    super('https://api.gofiber.vn/api')
  }

  async getPostsByCate(
    {
      pageIndex = 1,
      pageSize = 4,
      categories = ['marketing', 'cong-nghe', 'seo', 'kien-thuc-dich-vu']
    }: GetPostsByCate = {
      pageIndex: 1,
      pageSize: 4,
      categories: ['marketing', 'cong-nghe', 'seo', 'kien-thuc-dich-vu']
    }
  ) {
    const queryParams = createQueryParams({
      pageIndex,
      pageSize,
      categories: categories.join(',')
    })
    const response = await this.get<any>(`/getPostByCateForNews?${queryParams.toString()}`)
    return response
  }
}

const postsApi = new PostsClient()
export default postsApi
