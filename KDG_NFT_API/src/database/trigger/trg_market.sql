
----------------------------------------------------
CREATE TRIGGER TRG_LIST_IMPORT
BEFORE INSERT
ON SGD3.LIST_LOGS
FOR EACH ROW
EXECUTE PROCEDURE KING_LIVE.FNC_LIST_IMPORT ();



----------------------------------------------------
CREATE TRIGGER TRG_BID_IMPORT
BEFORE INSERT
ON SGD3.BID_LOGS
FOR EACH ROW
EXECUTE PROCEDURE KING_LIVE.FNC_BID_IMPORT ();

----------------------------------------------------
CREATE TRIGGER TRG_BID_IMPORT
BEFORE INSERT
ON SGD3.UPDATE_BID_LOGS
FOR EACH ROW
EXECUTE PROCEDURE KING_LIVE.FNC_UPDATE_BID_IMPORT ();


----------------------------------------------------
CREATE TRIGGER TRG_BID_IMPORT
BEFORE INSERT
ON SGD3.CANCEL_BID_LOGS
FOR EACH ROW
EXECUTE PROCEDURE KING_LIVE.FNC_CANCEL_BID_IMPORT ();



----------------------------------------------------
CREATE TRIGGER TRG_BUY_IMPORT
BEFORE INSERT
ON SGD3.BUY_LOGS
FOR EACH ROW
EXECUTE PROCEDURE KING_LIVE.FNC_BUY_IMPORT ();




----------------------------------------------------
CREATE TRIGGER TRG_ACCEPT_BID_IMPORT
BEFORE INSERT
ON SGD3.ACCEPT_BID_LOGS
FOR EACH ROW
EXECUTE PROCEDURE KING_LIVE.FNC_ACCEPT_BID_IMPORT ();



----------------------------------------------------
CREATE TRIGGER TRG_CANCEL_BID_IMPORT
BEFORE INSERT
ON SGD3.CANCEL_BID_LOGS
FOR EACH ROW
EXECUTE PROCEDURE KING_LIVE.FNC_CANCEL_BID_IMPORT ();


----------------------------------------------------
CREATE TRIGGER TRG_CANCEL_LIST_IMPORT
BEFORE INSERT
ON SGD3.CANCEL_LISTED_LOGS
FOR EACH ROW
EXECUTE PROCEDURE KING_LIVE.FNC_CANCEL_LIST_IMPORT ();
