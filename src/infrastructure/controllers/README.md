目次
基本のディレクトリ構成と役割
参考
そのリクエストパラメータ、クエリストリングに入れますか、それともボディに入れますか








基本のディレクトリ構成と役割
file	description
index.ts	ServiceFactory の読み込み。
リクエストに対するレスポンス
requestBody.ts	　 リソースの作成や更新で必要な情報はここに入れる。

ex. ユーザーの入力値
requestParams.ts	何らかのリソースのフィルタリング、ソート、ページングを実現したいときに用います。

ex. localhost:3000/items?name=hoge ... (search)
ex. localhost:3000/items?name=hoge ... (sort)
ex. localhost:3000/items?page=3&limit=50 ... (paging)
requestQuery.ts	一意にリソースを特定できる場合に用いる。

ex. localhost:3000/items/ABC123
responseBody.ts	レスポンスの Body に込める際に用いる