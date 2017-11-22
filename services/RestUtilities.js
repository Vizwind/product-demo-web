const baseUrl  = 'https://easy-mock.com/mock/5a15713f24f7a9469678c3a8/example'

export default class RestUtilities {

  static get(url) {
    return RestUtilities.request("GET", url)
  }

  static delete(url) {
    return RestUtilities.request("DELETE", url)
  }

  static put(url, data) {
    return RestUtilities.request("PUT", url, data)
  }

  static post (url, data) {
    return RestUtilities.request("POST", url, data)
  }

  static request(
    method,
    url,
    data = null ) {

    let isJsonResponse = false
    let isBadRequest = false
    let body = data
    let headers = {
      Accept: "application/json"
    }

    if (data) {
      if (typeof data === "object") {
        headers["Content-Type"] = "application/json"
        body = JSON.stringify(data)
      } else {
        headers["Content-Type"] = "application/x-www-form-urlencoded"
      }
    }

    return fetch(baseUrl + url, {
      method: method,
      headers: headers,
      body: body
    })
      .then(response => {
        isBadRequest = !response.status.toString().startsWith("2")

        let responseContentType = response.headers.get("content-type")
        if ( responseContentType &&
          responseContentType.indexOf("application/json") !== -1 ) {
          isJsonResponse = true
          return response.json()
        } else {
          return response.text()
        }
      })
      .then((responseContent) => {
        let response = {
          is_error: isBadRequest,
          error_content: isBadRequest ? responseContent : null,
          content: isBadRequest ? null : responseContent
        }
        return response
      })
  }
}
