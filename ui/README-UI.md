# big-file-upload

## 配置api、component自动导入
  https://blog.csdn.net/weixin_40803490/article/details/141926633

## import {} from 'vue-router'
  Cannot find module 'vue-router'
  Resolution: Add "moduleResolution": "node" to "compilerOptions" in tsconfig.app.json and restart VSCode
  ```javascript
    {
      ...
      "compilerOptions": {
        ...
        "moduleResolution": "node"
      }
    }
  ```