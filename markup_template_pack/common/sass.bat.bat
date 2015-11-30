cd /d %~dp0

::sass --watch -t nested sass:css
::sass --watch -t expented sass:css
sass --watch -t expanded sass:css
::sass --watch -t compressed sass:css

::sassフォルダをコンパクトでWatch、cssフォルダにコンパイルする
::※バッチファイルを実行した際にコマンドラインがループして表示される場合は、バッチファイルと監視フォルダを同名で同階層に置かないようにする