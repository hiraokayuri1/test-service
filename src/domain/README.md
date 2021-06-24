目次
ドメイン層の役割
Entity の実装
Entity クラスの作成方針
Repository の実装
Service の実装
参考
ドメイン層の実装




ドメイン層の役割
index	subject	description
1.	Entity の実装
(index.ts)	業務データを保持するためのクラス(Entity クラス)を作成する。
2.	Repository の実装
( repository.ts )	業務データを操作するためのメソッドを実装し、Service クラスに提供する。
業務データを操作するためのメソッドとは、具体的には、Entity オブジェクトに対する CRUD 操作となる。
3.	Service の実装 ( service.ts )	業務ロジックを実行するためのメソッドを実装し、アプリケーション層に提供する。
業務ロジック内で必要となる業務データは、Repository を介して、Entity オブジェクトとして取得する。
業務ロジック(Service)と業務データへアクセスするためのロジックを分離することで、業務ロジックの実装範囲をビジネスルールに関する実装に専念させる。
業務データに対する操作を Repository に集約すること、業務データへのアクセスの共通化を行う。




Entity の実装
Entity クラスの実装方針
index	policy	supplement
1.	Entity クラスは、テーブル毎に作成する。	ただし、テーブル間の関連を保持するためのマッピングテーブルについては、Entity クラスは不要である。
また、テーブルが正規化されていない場合は、必ずしもテーブル毎にはならない。
テーブルが正規化されていない時のアプローチは、表外の警告欄と備考欄を参照されたい。



Repository の実装




Service の実装