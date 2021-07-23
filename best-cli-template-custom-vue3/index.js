const path = require('path')
const fse = require('fs-extra')
const glob = require('glob')
const ejs = require('ejs')
const inquirer = require('inquirer')

async function install(options) {
  const projectPrompt = []
  const descriptionPrompt = {
    type: 'input',
    name: 'componentDescrition',
    message: '请输入项目描述信息',
    validate: function (v) {
      var done = this.async();
      setTimeout(function () {
        if (!v) {
          done('请输入项目描述信息');
          return;
        }
        done(null, true);
      }, 0);
    },
  };
  projectPrompt.push(descriptionPrompt);
  const projectInfo = await inquirer.prompt(projectPrompt);
  options.projectInfo.description = projectInfo.componentDescrition
  try {
    const { sourcePath, targetPath, templateInfo } = options
    fse.ensureDirSync(sourcePath);
    fse.ensureDirSync(targetPath);
    await fse.copy(sourcePath, targetPath);
    // ejs 动态渲染模板
    const templateIgnore =templateInfo.ignore || [];
    const ignore = ['node_modules/**', ...templateIgnore];
    await ejsRender({ ignore, targetPath, data: options.projectInfo });

  } catch (error) {
    throw error;
  }
}

async function ejsRender(options) {
  const dir = options.targetPath;
  const params = {
    cwd: dir,
    ignore: options.ignore || '',
    nodir: true,
  };
  const projectInfo = options.data;
  return new Promise((resolve, reject) => {
    glob('**', params, (err, files) => {
      if (err) {
        reject(err);
      }
      Promise.all(
        files.map((file) => {
          const filePath = path.join(dir, file);
          return new Promise((resolve1, reject1) => {
            ejs.renderFile(filePath, projectInfo, {}, (err, result) => {
              if (err) {
                reject1();
              } else {
                // 重新写入
                fse.writeFileSync(filePath, result);
                resolve1();
              }
            });
          });
        }),
      )
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

module.exports = install