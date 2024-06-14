module.exports = {
    boardList: `select * from board order by no desc limit ?,?`,
    insertBoard:`insert into board set ?`,
    updateBoard:`update board set ? where no = ?`,
    deleteBoard: `delete from board where no = ?`,
    getBoard : `select * from board where no = ?`,
    boardCount: `select count(*) cnt from board`
}