const express = require("express");
const { userInfo, issueCommunicationPost, issueCommunicationPostComment } = require('./models');


const app = express();

app.set("port", process.env.PORT || 3001);


app.get('*', async (req, res, next) => {
  try {
    const userId = 1; // 원하는 userId 값으로 수정

    const user = await userInfo.findOne({
      where: { userId }, // 조건을 userId로 지정
      include: [
        { model: issueCommunicationPost },
        { model: issueCommunicationPostComment }
      ],
    });

    if (user) {
      console.log(user);
      res.json(user);
    } else {
      console.log('User not found');
      res.json({ error: 'User not found' });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// app.get('*', async (req, res, next) => {
//   try {
//     const _users = await userInfo.findAll({
//       include: [
//         { model: issueCommunicationPost },
//         { model: issueCommunicationPostComment }
//       ],
// 		where : {id : 2},
//     });
	  
// console.log(userInfo.findAll().toString()); // Sequelize의 SQL 쿼리 로그 출력
//     console.log(_users);
//     res.json(_users);
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// });

app.get("/", (req, res) => {
    res.send("Hello, Express");
});

app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트에서 대기 중");
});

// app.use((req, res, next) => {
//     console.log("모든 요청에 다 실행됨");
//     next();
// });

// app.get(
//     "/",
//     (req, res, next) => {
//         console.log("GET / 요청에서만 실행됨");
//         next();
//     },
//     (req, res) => {
//         throw new Error("에러는 에러 처리 미들웨어로 간다");
//     }
// );

// app.use((err, req, res, next) => {
//     console.error(err);
//     res.status(500).send(err.message);
// });

// app.listen(app.get("port"), () => {
//     console.log(app.get("port"), "번 포트에서 대기 중");
// });
